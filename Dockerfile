FROM node:20.11.1

WORKDIR /home/node/app

COPY . .

USER node

COPY --chown=node:node . .

EXPOSE 80

CMD [ "npm", "start" ]
