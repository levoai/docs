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

if [ -r "$DIR"/.env ]
then
    source "$DIR"/.env
fi

start() {
  echo "Starting Levo Satellite..."
  if [ ! -e "$DIR"/docker-compose.yml ]
  then
    echo "Downloading Levo Satellite docker compose file."
    curl https://docs.levo.ai/artifacts/satellite/docker-compose.yml -o "$DIR"/docker-compose.yml
  fi

  export LEVOAI_AUTH_KEY=$LEVOAI_AUTH_KEY
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
  docker compose -f "$DIR"/docker-compose.yml pull
  docker compose -f "$DIR"/docker-compose.yml up -d --force-recreate
  echo "Levo Satellite upgraded Successfully!!!"
}

"$@"
