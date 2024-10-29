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

# Check if the container is running  
if ! docker-compose ps | grep -q "Up"; then  
    echo "Error: Container is not running"  
    echo "Docker Compose Status:"  
    docker-compose ps  
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

# Check container port mapping  
echo "Checking container port mapping..."  
PORT_MAPPING=$(docker port $CONTAINER_ID 80)  
if [ -z "$PORT_MAPPING" ]; then  
    echo "Error: Port 80 is not mapped"  
    docker inspect $CONTAINER_ID  
    exit 1  
fi  
echo "Port mapping: $PORT_MAPPING"  

# Check if container is actually running  
if [ "$(docker inspect -f '{{.State.Running}}' $CONTAINER_ID)" != "true" ]; then  
    echo "Error: Container is not in running state"  
    docker inspect $CONTAINER_ID  
    exit 1  
fi  

# Check container logs for any obvious errors  
echo "Recent container logs:"  
docker logs --tail 50 $CONTAINER_ID  

# Try to connect to the service using multiple methods  
echo "Attempting to connect to service..."  

# Method 1: Using wget inside container  
echo "Testing connection inside container..."  
if ! docker exec $CONTAINER_ID wget -q --spider --timeout=10 http://localhost/; then  
    echo "Error: Service not accessible inside container"  
    echo "Container nginx status:"  
    docker exec $CONTAINER_ID nginx -t  
    echo "Container nginx logs:"  
    docker exec $CONTAINER_ID cat /var/log/nginx/error.log  
    exit 1  
fi  

# Method 2: Using curl from host  
echo "Testing connection from host..."  
for i in {1..3}; do  
    echo "Attempt $i..."  
    if curl -s -f -m 5 http://localhost/ > /dev/null; then  
        echo "Successfully connected to service"  
        echo "All validation checks passed"  
        exit 0  
    fi  
    sleep 5  
done  

# If we get here, all connection attempts failed  
echo "Error: Failed to connect to service after multiple attempts"  
echo "Container logs:"  
docker logs $CONTAINER_ID  
echo "Nginx error logs:"  
docker exec $CONTAINER_ID cat /var/log/nginx/error.log  
echo "Container port bindings:"  
docker inspect -f '{{range $p, $conf := .NetworkSettings.Ports}}{{$p}} -> {{(index $conf 0).HostPort}}{{"\n"}}{{end}}' $CONTAINER_ID  
echo "Container network settings:"  
docker inspect -f '{{json .NetworkSettings.Networks}}' $CONTAINER_ID  
exit 1