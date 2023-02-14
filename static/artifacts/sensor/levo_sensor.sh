#!/usr/bin/env bash

SCRIPT_NAME="$(basename "$0")"

USAGE_PREFIX="$SCRIPT_NAME start [sensor options...] | stop | restart | logs

Sensor options:
"

set -e

sensor_version=0.18.32

# Print Sensor help message and exit
show_help_and_exit() {
  echo "$USAGE_PREFIX"
  docker run --rm levoai/ebpf_sensor:${sensor_version} --help
  exit
}

# When one of the arguments passed to this script is -f or --config-file-path, then the next argument - file path, is
# mapped into the sensor container as '/home/levo/config.yml'.
set_abs_filename() {
  # $1 : relative filename
  if [ ! -f "$1" ]; then
    echo "$1: No such file"
    exit
  fi
  abs_path="$(realpath "$1")"
}

declare -a SENSOR_ARGS CONFIG_FILE_MAPPING USERID

cmd="start"

while [ $# -gt 0 ]
do
    if [ "$1" = "-f" ] || [ "$1" = "--config-file-path" ]; then
      set_abs_filename "$2"
      CONFIG_FILE_MAPPING=(-v "$abs_path:/home/levo/config.yml")
      SENSOR_ARGS+=(--config-file-path /home/levo/config.yml)
      shift

    elif [ "$1" = "-h" ] ||  [ "$1" = "--help" ]; then
      show_help_and_exit

    elif [ "$1" = "-u" ] ||  [ "$1" = "--user" ]; then
      USERID=(-u "$2")
      shift

    # This script should not be invoked with --host-proc-path option.
    elif [ "$1" = "-P" ] ||  [ "$1" = "--host-proc-path" ]; then
      echo "Do not pass --host-proc-path option to launch Sensor container from this script"
      exit 1

    # If the argument is start, stop, restart, logs, don't pass it to the Sensor container.
    elif [ "$1" = "start" ] || [ "$1" = "stop" ] || [ "$1" = "restart" ] || [ "$1" = "logs" ]; then
      cmd="$1"

    else
      SENSOR_ARGS+=("$1")
    fi
    shift
done

start() {
  set +e
  if ! mount | grep -q debugfs; then
    if [[ $(id -u) != 0 ]]; then
      >&2 echo "$SCRIPT_NAME must be run with root privileges.  Exiting."
      exit 1
    fi
    echo "Mounting debugfs"
    mount -t debugfs none /sys/kernel/debug
    mount_rc=$?

    if [ $mount_rc != 0 ] ; then
      echo "Failed to mount debugfs. Sensor cannot run without debugfs."
      if [ $mount_rc == 32 ] ; then
        echo "Please run the below command to verify that the running kernel built with debugfs enabled:"
        echo "  grep CONFIG_DEBUG_FS /boot/config-`uname -r`"
      fi
      echo "Exiting."
      exit 1
    fi
  fi
  set -e

  # Default to 0.5 CPUs but let the user override with env variable
  cpus=${LEVO_SENSOR_CPUS:-0.5}

  # Default to 1GB of memory but let the user override with env variable
  memory=${LEVO_SENSOR_MEMORY:-1g}

  echo "Starting the Levo.ai eBPF Sensor.  Version: ${sensor_version}, args: ${SENSOR_ARGS[*]}"
  docker rm levoai-ebpf-sensor 2>/dev/null || true
  docker run --name=levoai-ebpf-sensor --restart unless-stopped \
    -e OUTSIDE_HOSTNAME="$(hostname)" "${USERID[@]}"\
    --cap-drop=all --cap-add=SYS_ADMIN --cap-add=SYS_RESOURCE --cap-add=DAC_OVERRIDE\
    --cpus="${cpus}" --memory="${memory}" \
    -v /sys/kernel/debug/tracing:/sys/kernel/tracing:rw -v /proc:/host/proc:ro "${CONFIG_FILE_MAPPING[@]}" \
    --detach levoai/ebpf_sensor:${sensor_version} \
    --host-proc-path /host/proc "${SENSOR_ARGS[@]}"
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
