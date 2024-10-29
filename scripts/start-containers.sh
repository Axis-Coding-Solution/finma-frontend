#!/bin/bash
echo "Starting containers..."
docker-compose -f /home/ubuntu/client/docker-compose.yml up -d --build
