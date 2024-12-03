#!/usr/bin/env bash

CONTAINER_NAME="levoai-testrunner"
IMAGE_NAME="levoai/levo:stable"

# Function to display usage information
show_usage() {
  echo "Usage: $0 [start|stop]"
  echo ""
  echo "Arguments:"
  echo "  start       Start the Levo container."
  echo "  stop        Stop the Levo container if running."
  echo "  --help, -h  Display this help message."
  echo ""
}

# Function to display the usage of the `start` option
show_start_usage() {
  echo "Usage: $0 start"
  echo ""
  echo "Starts the Levo container with the provided environment variables."
  echo "Ensure the following environment variables are set:"
  echo "  LEVOAI_AUTH_KEY   Your Levo authentication key."
  echo "  LEVO_ORG_ID       Your Levo organization ID."
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

# Function to check if an environment variable is set
check_env_var() {
  local var_name="$1"
  local var_value="${!var_name}"
  if [[ -z "$var_value" ]]; then
    echo "Error: Environment variable $var_name is not set."
    echo "export LEVOAI_AUTH_KEY='your-auth-key'"
    exit 1
  fi
}

# Function to start the container
start_container() {
  # Check for required environment variables
  check_env_var "LEVOAI_AUTH_KEY"
  check_env_var "LEVOAI_ORG_ID"

  echo "Starting the Levo container..."
  mkdir -p $HOME/.config/configstore

  docker run --restart always -d \
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
    -e LEVO_ORG_ID="${LEVOAI_ORG_ID}" \
    -ti $IMAGE_NAME start --key "${LEVOAI_AUTH_KEY}" --organization "${LEVOAI_ORG_ID}"

  if [[ $? -eq 0 ]]; then
    echo "'$CONTAINER_NAME' started successfully!"
    echo "You can view logs using the following command:"
    echo "  docker logs -f $CONTAINER_NAME"
  else
    echo "Failed to start the Levo container."
  fi
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
    if [[ "$2" == "--help" || "$2" == "-h" ]]; then
      show_start_usage
    else
      start_container
    fi
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

