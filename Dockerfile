FROM node

COPY . .
EXPOSE 8080:8080
RUN npm i
ENTRYPOINT [ "node", "app.js" ]