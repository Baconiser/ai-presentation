# Use an official Node.js 16 runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose a port if your application needs to listen to incoming requests
# EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "start" ]
