#!/bin/bash  
set -e  

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

# Stop and remove all containers  
echo "Stopping all Docker containers..."  
docker-compose down --remove-orphans || true  
docker rm -f $(docker ps -aq) || true  

# Remove all Docker networks  
echo "Cleaning up Docker networks..."  
docker network prune -f  

echo "Containers stopped successfully"