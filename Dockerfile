FROM node:20-alpine3.16 as build-app

RUN mkdir -p /app
WORKDIR /app

COPY ./package.json /app/
COPY ./ngnix.conf /app/
RUN npm install

COPY . /app
RUN npm run build --prod


FROM nginx:1.25.0 as upload-app

COPY --from=build-app /app/dist/talentouco-f /usr/share/nginx/html
COPY --from=build-app /app/ngnix.conf /etc/nginx/conf.d/default.conf