#!/bin/bash  

# Enable error reporting  
set -e  

echo "Starting service validation..."  

# Change to the correct directory  
cd /var/www/finma/client  

# Function to check if a URL is accessible  
check_url() {  
    local url=$1  
    local max_attempts=$2  
    local wait_time=$3  
    local attempt=1  

    while [ $attempt -le $max_attempts ]; do  
        echo "Attempt $attempt of $max_attempts: Checking $url..."  
        
        # Use wget instead of curl (more commonly available)  
        if wget -q --spider --timeout=10 "$url"; then  
            echo "Successfully connected to $url"  
            return 0  
        fi  
        
        echo "Failed to connect to $url, waiting ${wait_time}s before retry..."  
        sleep $wait_time  
        attempt=$((attempt + 1))  
    done  

    return 1  
}  

# Print system information  
echo "System Information:"  
echo "==================="  
uname -a  
echo "Docker version:"  
docker --version  
echo "Docker Compose version:"  
docker-compose --version  
echo "==================="  

# Check if docker-compose.yml exists  
if [ ! -f "docker-compose.yml" ]; then  
    echo "Error: docker-compose.yml not found in $(pwd)"  
    ls -la  
    exit 1  
fi  

# Show running containers  
echo "Current running containers:"  
docker ps -a  

# Get container status  
CONTAINER_STATUS=$(docker-compose ps --services --filter "status=running")  
if [ -z "$CONTAINER_STATUS" ]; then  
    echo "Error: No running containers found"  
    echo "Docker Compose Logs:"  
    docker-compose logs  
    exit 1  
fi  

# Get container ID  
CONTAINER_ID=$(docker-compose ps -q react_app)  
if [ -z "$CONTAINER_ID" ]; then  
    echo "Error: Could not find container ID for react_app"  
    docker-compose ps  
    exit 1  
fi  

echo "Container ID: $CONTAINER_ID"  

# Check container details  
echo "Container Details:"  
docker inspect $CONTAINER_ID  

# Check if nginx is running in container  
echo "Checking nginx process..."  
if ! docker exec $CONTAINER_ID ps aux | grep nginx; then  
    echo "Error: nginx process not found in container"  
    docker exec $CONTAINER_ID ps aux  
    exit 1  
fi  

# Check nginx configuration  
echo "Validating nginx configuration..."  
if ! docker exec $CONTAINER_ID nginx -t; then  
    echo "Error: nginx configuration test failed"  
    docker exec $CONTAINER_ID cat /etc/nginx/conf.d/nginx.conf  
    exit 1  
fi  

# Check port binding  
echo "Checking port 80 binding..."  
if ! docker exec $CONTAINER_ID netstat -tulpn | grep :80; then  
    echo "Error: Port 80 not bound in container"  
    docker exec $CONTAINER_ID netstat -tulpn  
    exit 1  
fi  

# Check host port 80  
echo "Checking host port 80..."  
if ! netstat -tulpn 2>/dev/null | grep :80; then  
    echo "Error: Port 80 not listening on host"  
    sudo netstat -tulpn  
    exit 1  
fi  

# Check service response  
echo "Checking service response..."  
for i in {1..3}; do  
    echo "Attempt $i to access service..."  
    
    # Try accessing the service  
    if wget -q --spider --timeout=10 http://localhost/; then  
        echo "Service is responding successfully"  
        
        # Final validation successful  
        echo "All validation checks passed successfully"  
        exit 0  
    fi  
    
    echo "Waiting 5 seconds before next attempt..."  
    sleep 5  
done  

# If we get here, the service check failed  
echo "Error: Service is not responding after 3 attempts"  
echo "Container logs:"  
docker logs $CONTAINER_ID  
echo "Nginx error logs:"  
docker exec $CONTAINER_ID cat /var/log/nginx/error.log  
exit 1