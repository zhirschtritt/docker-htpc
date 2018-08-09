FROM node:alpine

RUN mkdir app
WORKDIR /app
COPY app.js /app
COPY package.json /app

RUN npm i
VOLUME /data

EXPOSE 5001
EXPOSE 4040

CMD ["npm", "start"]


