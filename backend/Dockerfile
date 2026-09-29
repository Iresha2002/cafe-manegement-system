# 1. Base image with Node.js on lightweight Alpine Linux
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files first to take advantage of Docker caching
COPY package*.json ./

# 4. Install dependencies inside the container
RUN npm install

# 5. Copy the rest of the backend source code
COPY . .

# 6. Inform Docker that the container listens on port 5000
EXPOSE 5000

# 7. Command to run the application
CMD ["node", "server.js"]
