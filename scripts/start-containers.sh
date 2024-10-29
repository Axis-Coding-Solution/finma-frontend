#!/bin/bash  
set -e  

echo "Starting containers..."  

# Change to the correct directory  
cd /var/www/finma/client  

# Check if docker-compose file exists  
if [ ! -f "docker-compose.yml" ]; then  
    echo "docker-compose.yml not found in $(pwd)"  
    ls -la  
    exit 1  
fi  

# Stop any existing containers and clean up  
echo "Stopping existing containers..."  
docker-compose down --remove-orphans || true  
docker rm -f $(docker ps -aq) || true  

# Stop nginx if it's running  
echo "Stopping nginx service if running..."  
sudo systemctl stop nginx || true  

# Check for processes using port 80  
echo "Checking for processes using port 80..."  
if sudo lsof -i :80; then  
    echo "Stopping processes using port 80..."  
    sudo fuser -k 80/tcp  
fi  

# Clean up Docker system  
echo "Cleaning up Docker system..."  
docker system prune -f  

# Build and start containers  
echo "Building and starting containers..."  
docker-compose build --no-cache  
docker-compose up -d --force-recreate  

# Wait for container to be ready  
echo "Waiting for container to be ready..."  
sleep 10  

# Check container status  
if docker-compose ps | grep -q "Up"; then  
    echo "Containers started successfully"  
    docker-compose ps  
else  
    echo "Failed to start containers"  
    docker-compose logs  
    exit 1  
fi