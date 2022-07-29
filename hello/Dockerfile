FROM node:18-alpine

WORKDIR /project

EXPOSE 3000

COPY package.json .

RUN npm install

COPY . .

CMD [ "node", "app.js" ]
