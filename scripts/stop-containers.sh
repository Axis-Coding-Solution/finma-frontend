#!/bin/bash
echo "Stopping running containers..."
docker-compose -f /home/ubuntu/client/docker-compose.yml down
