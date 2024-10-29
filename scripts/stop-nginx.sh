#!/bin/bash
# Script to stop the Nginx container

echo "Stopping Nginx container..."

# Stop nginx_app container
docker stop nginx_app

echo "Nginx container stopped."
