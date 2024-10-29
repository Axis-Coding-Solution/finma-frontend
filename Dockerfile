# Stage 1: Build React app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html  

# Install necessary tools for debugging  
RUN apk update && apk add --no-cache \
    curl \
    wget \
    net-tools \
    procps \
    busybox-extras  

# Remove default nginx configuration  
RUN rm /etc/nginx/conf.d/default.conf  

# Copy nginx configurations  
COPY nginx/nginx.conf /etc/nginx/nginx.conf  
COPY nginx/default.conf /etc/nginx/conf.d/default.conf   

COPY --from=builder /app/dist .  

# Create required directories and set permissions  
RUN mkdir -p /var/log/nginx \
    && touch /var/log/nginx/access.log \
    && touch /var/log/nginx/error.log \
    && chown -R nginx:nginx /var/log/nginx \
    && chown -R nginx:nginx /usr/share/nginx/html 

# Verify nginx configuration during build  
RUN nginx -t

# Add health check  
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost/health || exit 1 

# Expose port 80 for the application
EXPOSE 80

# Use a custom entrypoint script  
COPY docker-entrypoint.sh /  

ENTRYPOINT ["/scripts/docker-entrypoint.sh"] 
