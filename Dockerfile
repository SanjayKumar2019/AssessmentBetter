# Use official Node.js image as base
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all the app files
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
