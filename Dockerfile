# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies in the container
RUN npm install

# If you have production-specific dependencies:
# RUN npm ci --only=production

# Copy the rest of the application files to the container
COPY . .

# Expose the port the app will run on
EXPOSE 7001

# Command to run the application
CMD [ "node", "server.js" ]
