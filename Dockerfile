# frontend.Dockerfile
FROM node:22-alpine

WORKDIR /app

# Install dependencies first for caching
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose ports (app + debug + HMR)
EXPOSE 3000 9229 24678

# Start development server
CMD ["npm", "run", "dev"]