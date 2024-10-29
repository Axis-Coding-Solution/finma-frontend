#!/bin/bash  

# Enable error reporting  
set -e  

echo "Validating Nginx service..."  

# Function to check if Nginx is running in container  
check_nginx_status() {  
    local container_id=$1  
    
    echo "Checking Nginx process status..."  
    if docker exec $container_id ps aux | grep -q "[n]ginx:"; then  
        echo "Nginx process is running"  
        return 0  
    else  
        echo "Nginx process is not running"  
        return 1  
    fi  
}  

# Function to check Nginx configuration  
check_nginx_config() {  
    local container_id=$1  
    
    echo "Validating Nginx configuration..."  
    if docker exec $container_id nginx -t; then  
        echo "Nginx configuration is valid"  
        return 0  
    else  
        echo "Nginx configuration is invalid"  
        return 1  
    fi  
}  

# Get container ID  
CONTAINER_ID=$(docker-compose ps -q react_app)  
if [ -z "$CONTAINER_ID" ]; then  
    echo "Error: Could not find container ID for react_app"  
    docker-compose ps  
    exit 1  
fi  

echo "Container ID: $CONTAINER_ID"  

# Check if container is running  
if [ "$(docker inspect -f '{{.State.Running}}' $CONTAINER_ID)" != "true" ]; then  
    echo "Error: Container is not running"  
    docker inspect $CONTAINER_ID  
    exit 1  
fi  

# Display Nginx configurations  
echo "Current Nginx main configuration:"  
docker exec $CONTAINER_ID cat /etc/nginx/nginx.conf  
echo "Current Nginx server configuration:"  
docker exec $CONTAINER_ID cat /etc/nginx/conf.d/default.conf  

# Check Nginx configuration  
if ! check_nginx_config $CONTAINER_ID; then  
    echo "Nginx configuration validation failed"  
    exit 1  
fi  

# Check Nginx status  
if ! check_nginx_status $CONTAINER_ID; then  
    echo "Attempting to start Nginx..."  
    docker exec $CONTAINER_ID nginx  
    sleep 2  
    
    if ! check_nginx_status $CONTAINER_ID; then  
        echo "Failed to start Nginx"  
        echo "Container logs:"  
        docker logs $CONTAINER_ID  
        echo "Nginx error logs:"  
        docker exec $CONTAINER_ID cat /var/log/nginx/error.log  
        exit 1  
    fi  
fi  

# Check if Nginx is listening on port 80  
echo "Checking if Nginx is listening on port 80..."  
if ! docker exec $CONTAINER_ID wget -q --spider --timeout=10 http://localhost/; then  
    echo "Error: Nginx is not responding on port 80"  
    echo "Nginx status:"  
    docker exec $CONTAINER_ID nginx -t  
    echo "Nginx error logs:"  
    docker exec $CONTAINER_ID cat /var/log/nginx/error.log  
    exit 1  
fi  

echo "Nginx service is running and configured correctly"  
exit 0