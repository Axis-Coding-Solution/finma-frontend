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
RUN apk add --no-cache \
    curl \
    wget \
    netstat-nat \
    procps \
    net-tools  

RUN rm /etc/nginx/conf.d/default.conf  
COPY nginx.conf /etc/nginx/conf.d/  
COPY --from=builder /app/dist .  

# Add health check  
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost/health || exit 1 

# Expose port 80 for the application
EXPOSE 80

# Start Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
