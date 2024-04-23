# Use an existing docker image as a base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the production-ready code
RUN npm run build

# Expose a port for the application
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
