#!/bin/bash  
set -e  

echo "Validating the service..."  

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
        
        if curl -s -f -m 5 "$url" > /dev/null; then  
            echo "Successfully connected to $url"  
            return 0  
        fi  
        
        echo "Failed to connect to $url, waiting ${wait_time}s before retry..."  
        sleep $wait_time  
        attempt=$((attempt + 1))  
    done  

    return 1  
}  

# Check if docker-compose exists  
if [ ! -f "docker-compose.yml" ]; then  
    echo "Error: docker-compose.yml not found"  
    exit 1  
fi  

# Check if container is running  
if ! docker-compose ps | grep -q "Up"; then  
    echo "Error: Container is not running"  
    docker-compose ps  
    docker-compose logs  
    exit 1  
fi  

# Get container ID  
CONTAINER_ID=$(docker-compose ps -q react_app)  
if [ -z "$CONTAINER_ID" ]; then  
    echo "Error: Could not find container ID"  
    exit 1  
fi  

# Check container health  
HEALTH_STATUS=$(docker inspect --format='{{.State.Health.Status}}' $CONTAINER_ID 2>/dev/null || echo "none")  
if [ "$HEALTH_STATUS" != "healthy" ] && [ "$HEALTH_STATUS" != "none" ]; then  
    echo "Error: Container health check failed: $HEALTH_STATUS"  
    docker inspect $CONTAINER_ID  
    exit 1  
fi  

# Check if port 80 is listening  
if ! netstat -tulpn 2>/dev/null | grep -q ":80"; then  
    echo "Error: Port 80 is not listening"  
    netstat -tulpn  
    exit 1  
fi  

# Check if the service is responding  
if ! check_url "http://localhost" 3 10; then  
    echo "Error: Service is not responding on http://localhost"  
    docker-compose logs  
    exit 1  
fi  

# Check nginx configuration  
if ! docker exec $CONTAINER_ID nginx -t; then  
    echo "Error: nginx configuration test failed"  
    exit 1  
fi  

# All checks passed  
echo "Service validation successful"  
exit 0