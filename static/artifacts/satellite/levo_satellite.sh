#!/usr/bin/env bash

###########################################
#             Usage:
#             ./levo_satellite.sh start
#             ./levo_satellite.sh stop
#             ./levo_satellite.sh restart
#             ./levo_satellite.sh upgrade
############################################

set -Eexuo pipefail
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
echo "DIR: $DIR"

if [ -r "$DIR"/.levoenv ]
then
    echo "Loading environment variables from $DIR/.levoenv"
    source "$DIR"/.levoenv
fi

set_resource_limits() {
    # Get the number of cores on the machine. This should work for both Linux and Mac.
  cpu_cores=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || sysctl -n hw.ncpu)

  # One CPU unit is 1/30th of total cores.
  cpu_unit=$(echo "scale=2; $cpu_cores / 30" | bc)
  echo "CPU cores: $cpu_cores, CPU unit: $cpu_unit"

  export LEVOAI_RABBITMQ_CPU_LIMIT=$(bc <<< "$cpu_unit * 10")
  export LEVOAI_SATELLITE_CPU_LIMIT=$(bc <<< "$cpu_unit * 6")
  export LEVOAI_TAGGER_CPU_LIMIT=$(bc <<< "$cpu_unit * 15")
  export LEVOAI_COLLECTOR_CPU_LIMIT=$(bc <<< "$cpu_unit * 6")

  # Get the total memory on the machine. This should work for both Linux and Mac.
  total_memory=$(grep MemTotal /proc/meminfo 2>/dev/null | awk '{print $2}' || sysctl -n hw.memsize)
  memory_mult=$(echo "scale=2; $total_memory / 1024 / 256 / 20" | bc)

  # mac memsize is in bytes, so divide by 1024 to get to MB
  if [[ "$OSTYPE" == "darwin"* ]]; then
    memory_mult=$(echo "scale=2; $memory_mult / 1024" | bc)
  fi
  memory_unit=$(bc <<< "$memory_mult * 256")
  echo "Total memory: $total_memory, memory unit: $memory_unit"

  export LEVOAI_RABBITMQ_MEM_LIMIT=$(bc <<< "$memory_unit * 4")m
  export LEVOAI_SATELLITE_MEM_LIMIT=$(bc <<< "$memory_unit * 2")m
  export LEVOAI_TAGGER_MEM_LIMIT=$(bc <<< "$memory_unit * 8")m
  export LEVOAI_COLLECTOR_MEM_LIMIT=$(bc <<< "$memory_unit * 4")m
}

start() {
  echo "Starting Levo Satellite..."
  if [ ! -e "$DIR"/docker-compose.yml ]
  then
    echo "Downloading Levo Satellite docker compose file."
    curl https://docs.levo.ai/artifacts/satellite/docker-compose.yml -o "$DIR"/docker-compose.yml
  fi

  export LEVOAI_AUTH_KEY=$LEVOAI_AUTH_KEY

  set_resource_limits
  docker compose -f "$DIR"/docker-compose.yml up -d
  echo "Levo Satellite started Successfully!!!"
}

stop() {
  echo "Stopping Levo Satellite..."
  docker compose -f "$DIR"/docker-compose.yml stop
  echo "Levo Satellite stopped Successfully!!!"
}

restart() {
  echo "Restarting Levo Satellite..."
  stop
  start
  echo "Levo Satellite restarted Successfully!!!"
}

upgrade() {
  echo "Upgrading Levo Satellite..."
  curl https://docs.levo.ai/artifacts/satellite/docker-compose.yml -o "$DIR"/docker-compose.yml
  docker compose -f "$DIR"/docker-compose.yml down -v --remove-orphans
  set_resource_limits
  docker compose -f "$DIR"/docker-compose.yml pull
  docker compose -f "$DIR"/docker-compose.yml up -d --force-recreate
  echo "Levo Satellite upgraded Successfully!!!"
}

"$@"
