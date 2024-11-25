# Build Stage
FROM node:16 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install


# Runtime Stage
FROM node:16
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
