#!/bin/bash
# Cleanup script to remove old containers and images

echo "Cleaning up old containers and images..."

# Remove stopped containers
docker container prune -f

# Remove unused images
docker image prune -f
