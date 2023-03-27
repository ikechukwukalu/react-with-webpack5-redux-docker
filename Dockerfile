FROM node:16.17.0-alpine
WORKDIR /app
COPY . /app
EXPOSE 8080
RUN npm install
CMD ["npm", "run", "dev"]