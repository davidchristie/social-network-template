FROM node:9.11.2-apline

WORKDIR /app

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

COPY . .

RUN yarn build
