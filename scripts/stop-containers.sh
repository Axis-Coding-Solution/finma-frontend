#!/bin/bash  
set -e  

CONTAINER_NAME="client"  # Replace with the actual container name  

echo "Stopping running containers..."  

# Change to the correct directory  
cd /var/www/finma/client  

# Stop any container using port 80  
echo "Checking for processes using port 80..."  
if sudo lsof -i :80; then  
    echo "Stopping processes using port 80..."  
    sudo fuser -k 80/tcp  
fi  

# Stop nginx if it's running  
echo "Stopping nginx service if running..."  
sudo systemctl stop nginx || true  

# Stop and remove the specific container by name  
echo "Stopping Docker container: $CONTAINER_NAME..."  
docker stop $CONTAINER_NAME || true  
docker rm $CONTAINER_NAME || true  

# Optionally stop and remove all containers (uncomment if needed)  
# echo "Stopping all Docker containers..."  
# docker-compose down --remove-orphans || true  
# docker rm -f $(docker ps -aq) || true  

# Remove all Docker networks  
echo "Cleaning up Docker networks..."  
docker network prune -f  

echo "Containers stopped successfully"