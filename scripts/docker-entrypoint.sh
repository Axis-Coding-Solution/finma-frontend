#!/bin/sh  
set -e  

# Check if nginx configuration is valid  
echo "Validating nginx configuration..."  
nginx -t  

# Start nginx in foreground  
echo "Starting nginx..."  
exec nginx -g 'daemon off;'