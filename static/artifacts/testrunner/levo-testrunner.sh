#!/bin/bash

CONTAINER_NAME="levoai_testrunner"
IMAGE_NAME="levoai/levo:stable"

# Function to display usage information
show_usage() {
  echo "Usage: $0 [start|stop]"
  echo ""
  echo "Options:"
  echo "  start       Start the Levo container."
  echo "  stop        Stop the Levo container if running."
  echo "  --help, -h  Display this help message."
  echo ""
  echo "Environment Variables:"
  echo "  LEVOAI_AUTH_KEY   Your Levo authentication key (required for start)."
  echo "  LEVO_ORG_ID       Your Levo organization ID (required for start)."
  echo ""
  echo "Example:"
  echo "  export LEVOAI_AUTH_KEY='your-auth-key'"
  echo "  export LEVO_ORG_ID='your-org-id'"
  echo "  $0 start"
}

# Function to determine the host's Docker internal IP
get_docker_internal_ip() {
  if command -v ip > /dev/null; then
    ip route | awk '/docker0/ { print $9 }'
  else
    # Fallback for systems without the `ip` command
    echo "127.0.0.1"
  fi
}

# Function to start the container
start_container() {
  if [[ -z "${LEVOAI_AUTH_KEY}" || -z "${LEVO_ORG_ID}" ]]; then
    echo "Error: LEVOAI_AUTH_KEY and LEVO_ORG_ID environment variables must be set."
    echo "Run '$0 --help' for usage information."
    exit 1
  fi

  echo "Starting the Levo container..."
  mkdir -p $HOME/.config/configstore

  docker run --rm -d \
    --name $CONTAINER_NAME \
    --add-host=host.docker.internal:$(get_docker_internal_ip) \
    --mount type=bind,source=$HOME/.config/configstore,target=/home/levo/.config/configstore \
    -v $HOME/.aws:/home/levo/.aws \
    -v $PWD:/home/levo/work:rw \
    -e LOCAL_USER_ID=$(id -u) \
    -e LOCAL_GROUP_ID=$(id -g) \
    -e LEVO_BASE_URL=https://api.levo.ai \
    -e TERM=xterm-256color \
    -e LEVOAI_AUTH_KEY="${LEVOAI_AUTH_KEY}" \
    -e LEVO_ORG_ID="${LEVO_ORG_ID}" \
    -ti $IMAGE_NAME start --key "${LEVOAI_AUTH_KEY}" --organization "${LEVO_ORG_ID}"
}

# Function to stop the container
stop_container() {
  if docker ps --filter "name=$CONTAINER_NAME" --format "{{.Names}}" | grep -q "$CONTAINER_NAME"; then
    echo "Stopping the Levo container..."
    docker stop $CONTAINER_NAME
  else
    echo "No running container found with name $CONTAINER_NAME."
  fi
}

# Main script logic
case "$1" in
  start)
    start_container
    ;;
  stop)
    stop_container
    ;;
  --help|-h)
    show_usage
    ;;
  *)
    echo "Invalid option: $1"
    show_usage
    exit 1
    ;;
esac

