#!/usr/bin/env bash

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
  echo "Error: kubectl is not installed or not found in your PATH. Please install kubectl and try again."
  exit 1
fi

# Validate if there is an active Kubernetes context
CURRENT_CONTEXT=$(kubectl config current-context 2>/dev/null)

if [ -z "$CURRENT_CONTEXT" ]; then
  echo "Warning: No active Kubernetes context found. Please configure your kubeconfig and try again."
  exit 1
fi

echo "Active Kubernetes context: $CURRENT_CONTEXT"

# Set the namespace (default to "levoai" if not provided as an argument)
NAMESPACE=${1:-levoai}

echo "Checking for pods in $NAMESPACE namespace.."

# Check if the namespace exists and has pods
PODS=$(kubectl get pods -n "$NAMESPACE" --no-headers -o custom-columns=":metadata.name")

if [ -z "$PODS" ]; then
  echo "Warning: No pods found in namespace '$NAMESPACE' in the current context."
  exit 1
fi

# Create a temporary directory to store logs
TEMP_DIR=$(mktemp -d)
echo "Temporary directory created: $TEMP_DIR"

# Loop through each pod and save its logs into separate files
for POD in $PODS; do
  LOG_FILE="$TEMP_DIR/${POD}.log"
  echo "Collecting logs for pod: $POD"
  kubectl logs "$POD" -n "$NAMESPACE" > "$LOG_FILE" 2>&1
done

# Create archive of current directory
TAR_FILE="/tmp/levoai_satellite_logs_$(date +%Y_%m_%d_%H_%M_%S).tar.gz"
tar -czf "$TAR_FILE" -C "$TEMP_DIR" .

# Print the path to the zip file
echo "Logs have been collected and archived at $TAR_FILE"

# Clean up temporary directory
rm -rf "$TEMP_DIR"


