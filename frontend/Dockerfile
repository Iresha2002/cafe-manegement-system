# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy source code
COPY . .

# 5. Build arguments for API URL (defaults to localhost:5000/api)
ARG VITE_API_URL=http://localhost:5000/api
ENV VITE_API_URL=$VITE_API_URL

# 6. Build the production application
RUN npm run build

# 7. Expose port 5173
EXPOSE 5173

# 8. Serve the built application to all network interfaces
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]