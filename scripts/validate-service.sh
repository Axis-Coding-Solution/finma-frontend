#!/bin/bash
echo "Validating the service..."
SERVICE_URL="http://localhost"

if curl -s $SERVICE_URL | grep -q "<title>Finma App</title>"; then
    echo "Service is running"
    exit 0
else
    echo "Service validation failed"
    exit 1
fi

