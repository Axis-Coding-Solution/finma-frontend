#!/bin/bash  

# Enable error reporting  
set -e  

echo "Validating Nginx service..."  

# Function to check if Nginx is running in container  
check_nginx_status() {  
    local container_name=$1  
    
    echo "Checking Nginx process status..."  
    if docker exec $container_name ps aux | grep -q "[n]ginx:"; then  
        echo "Nginx process is running"  
        return 0  
    else  
        echo "Nginx process is not running"  
        return 1  
    fi  
}  

# Function to check Nginx configuration  
check_nginx_config() {  
    local container_name=$1  
    
    echo "Validating Nginx configuration..."  
    if docker exec $container_name nginx -t; then  
        echo "Nginx configuration is valid"  
        return 0  
    else  
        echo "Nginx configuration is invalid"  
        return 1  
    fi  
}  

# Container name (adjust this to match your container name)  
CONTAINER_NAME="client"  

echo "Looking for container: $CONTAINER_NAME"  

# Check if container exists and is running  
if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then  
    echo "Error: Container '$CONTAINER_NAME' is not running"  
    echo "Running containers:"  
    docker ps  
    exit 1  
fi  

echo "Container found: $CONTAINER_NAME"  

# Display Nginx configurations  
echo "Current Nginx main configuration:"  
docker exec $CONTAINER_NAME cat /etc/nginx/nginx.conf  
echo "Current Nginx server configuration:"  
docker exec $CONTAINER_NAME cat /etc/nginx/conf.d/default.conf  

# Check Nginx configuration  
if ! check_nginx_config $CONTAINER_NAME; then  
    echo "Nginx configuration validation failed"  
    exit 1  
fi  

# Check Nginx status  
if ! check_nginx_status $CONTAINER_NAME; then  
    echo "Attempting to start Nginx..."  
    docker exec $CONTAINER_NAME nginx  
    sleep 2  
    
    if ! check_nginx_status $CONTAINER_NAME; then  
        echo "Failed to start Nginx"  
        echo "Container logs:"  
        docker logs $CONTAINER_NAME  
        echo "Nginx error logs:"  
        docker exec $CONTAINER_NAME cat /var/log/nginx/error.log  
        exit 1  
    fi  
fi  

# Check if Nginx is listening on port 80  
echo "Checking if Nginx is listening on port 80..."  
if ! docker exec $CONTAINER_NAME wget -q --spider --timeout=10 http://localhost/; then  
    echo "Error: Nginx is not responding on port 80"  
    echo "Nginx status:"  
    docker exec $CONTAINER_NAME nginx -t  
    echo "Nginx error logs:"  
    docker exec $CONTAINER_NAME cat /var/log/nginx/error.log  
    exit 1  
fi  

echo "Nginx service is running and configured correctly"  
exit 0