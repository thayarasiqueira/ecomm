FROM node:16-alpine
WORKDIR /app/ecomm-account
COPY package*.json ./
EXPOSE 3002
RUN npm install
COPY . .
ENTRYPOINT npm run dev