FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 6002
CMD [ "node", "index.js" ]