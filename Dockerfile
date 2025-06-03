# Use Node.js LTS base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose app port
EXPOSE 3000

# Start the server using ts-node and nodemon
CMD ["npm", "run", "dev"]
