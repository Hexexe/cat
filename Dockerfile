FROM node:16-alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY . . 

RUN npm i && npm i -g serve && npm run build

CMD [ "serve", "-s", "-l", "3000", "build" ]