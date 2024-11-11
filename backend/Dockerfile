# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 5000

# Set environment variables
# These can be overridden by a .env file or passed when running the container
ENV PORT=5000

# Start the application
CMD ["node", "server.js"]
