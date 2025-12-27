# Build stage for Vite React client
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Build the application
RUN npm run build

# Expose port (for local development if needed)
EXPOSE 3000

# Default command
CMD ["npm", "run", "preview"]
