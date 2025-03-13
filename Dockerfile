# Dockerfile
# Stage 1: Build the application
FROM node:22 AS builder
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
COPY yarn.lock* ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy all other files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:22-alpine AS production
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock* ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]