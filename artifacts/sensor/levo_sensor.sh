#!/usr/bin/env bash
# Script to start/stop/restart Levo's eBPF sensor.
# Usage:
#   levo_sensor.sh --collector-endpoint IP:4317 [sensor options..] start|stop|restart|logs

set -e

sensor_version=0.18.8

# Print Sensor help message and exit
show_help_and_exit() {
  docker run --rm levoai/ebpf_sensor:${sensor_version} --help
  exit
}

# When one of the arguments passed to this script is -f or --config-file-path, then the next argument - file path, is
# mapped into the sensor container as '/home/levo/config.yml'.
set_abs_filename() {
  # $1 : relative filename
  if [ ! -f $1 ]; then
    echo "$1: No such file"
    exit
  fi
  abs_path="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
}

cmd="start"
while [ $# -gt 0 ]
do
    if [ "$1" = "-f" ] || [ "$1" = "--config-file-path" ]; then
      set_abs_filename "$2"
      config_file_mapping="-v $abs_path:/home/levo/config.yml"
      arg="${arg} --config-file-path /home/levo/config.yml"
      shift

    elif [ "$1" = "-h" ] ||  [ "$1" = "--help" ]; then
      show_help_and_exit

    # This script should not be invoked with --host-proc-path option.
    elif [ "$1" = "-P" ] ||  [ "$1" = "--host-proc-path" ]; then
      echo "Do not pass --host-proc-path option to launch Sensor container from this script"
      exit 1

    # If the argument is start, stop, restart, logs, don't pass it to the Sensor container.
    elif [ "$1" = "start" ] || [ "$1" = "stop" ] || [ "$1" = "restart" ] || [ "$1" = "logs" ]; then
      cmd="$1"

    else
      arg="${arg} $1"
    fi
    shift
done

start() {
  echo "Starting Levo's Sensor with version: ${sensor_version} args: ${arg}"
  docker rm levoai-ebpf-sensor 2>/dev/null || true
  docker run --name=levoai-ebpf-sensor --restart unless-stopped \
    -e OUTSIDE_HOSTNAME=$(hostname) \
    -v /sys/kernel/debug:/sys/kernel/debug:rw -v /proc:/host/proc:ro $config_file_mapping \
    --privileged --detach levoai/ebpf_sensor:${sensor_version} \
    --host-proc-path /host/proc $arg
}

stop() {
  docker stop levoai-ebpf-sensor
  echo "Successfully stopped Levo's Sensor"
}

restart() {
  stop
  start
}

logs() {
  # If the container is not running, then print the logs of the last run.
  if [ "$(docker inspect -f '{{.State.Running}}' levoai-ebpf-sensor)" = "false" ]; then
    docker logs levoai-ebpf-sensor
  else
    docker logs -f levoai-ebpf-sensor
  fi
}

case $cmd in
  start)
    start
    ;;
  stop)
    stop
    ;;
  restart)
    restart
    ;;
  logs)
    logs
    ;;
  *)
    echo "Invalid command: $cmd"
    exit 1
    ;;
esac
