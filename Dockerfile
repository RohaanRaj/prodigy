FROM nginx:alpine

# Copy static site into nginx html directory
COPY . /usr/share/nginx/html

# Expose the default HTTP port (you can map different host ports per container)
EXPOSE 80

# Use default nginx startup command
CMD ["nginx", "-g", "daemon off;"]


