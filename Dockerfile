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

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d

# Copy build output from Stage 1
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
