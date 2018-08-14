FROM node:8.11.1-alpine

WORKDIR /service

COPY package.json ./

RUN npm install --production

COPY . ./

EXPOSE 3000

CMD ["node", "."]
