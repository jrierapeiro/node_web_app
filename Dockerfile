FROM node:8.9.0-slim
WORKDIR /usr/src/app
ADD . /usr/src/app
CMD npm start
