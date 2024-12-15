FROM node:18

WORKDIR /app

COPY script.js /app/

RUN npm install jsdom

CMD ["node", "script.js"]