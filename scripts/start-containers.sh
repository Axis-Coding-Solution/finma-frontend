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

# Clean up Docker system  
echo "Cleaning up Docker system..."  
docker system prune -f  

# Pull latest images  
echo "Pulling latest images..."  
docker-compose pull  

# Build and start containers  
echo "Building and starting containers..."  
docker-compose build --no-cache  
docker-compose up -d --force-recreate  

# Check container status  
if docker-compose ps | grep -q "Up"; then  
    echo "Containers started successfully"  
    docker-compose ps  
else  
    echo "Failed to start containers"  
    docker-compose logs  
    exit 1  
fi