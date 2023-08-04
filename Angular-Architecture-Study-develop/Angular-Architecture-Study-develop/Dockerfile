FROM node:16-alpine AS angular

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

RUN npm run restore

RUN npm run publish
