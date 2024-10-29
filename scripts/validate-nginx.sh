#!/bin/bash
# Script to validate if the Nginx service is running

echo "Validating Nginx service..."

# Check if the nginx_app container is running
if [[ "$(docker ps -q -f name=nginx_app)" ]]; then
    echo "Nginx service is running."
else
    echo "Nginx service is not running."
    exit 1
fi
