FROM node:20.11.1

WORKDIR /home/node/app

COPY . .

USER node

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]
