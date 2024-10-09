# Dockerfile for Angular
FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Serve the Angular build using NGINX
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/projet /usr/share/nginx/html
EXPOSE 80