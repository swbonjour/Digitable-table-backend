FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install glob rimraf --force
RUN npm install --force
COPY ./ ./

RUN npm run build