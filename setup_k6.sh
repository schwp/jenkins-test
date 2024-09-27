#!/bin/bash

# Ensure necessary tools are installed
apt-get update
apt-get install -y curl gnupg wget

# Download K6 binary
K6_VERSION="0.38.0"  # Change this to the latest version if needed
echo "Downloading k6 version ${K6_VERSION}..."
wget https://github.com/grafana/k6/releases/download/v${K6_VERSION}/k6-linux-amd64 -O /usr/local/bin/k6

# Make it executable
chmod +x /usr/local/bin/k6

# Check if k6 is installed
echo "Verifying k6 installation..."
k6 version

