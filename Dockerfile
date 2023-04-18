FROM node:14-alpine as builder
WORKDIR /app

COPY ./package*.json /app/
RUN npm ci 

COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/conf.d
COPY config/env.template.js /usr/share/nginx/html/env.js

COPY config/entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 80
CMD ["entrypoint.sh"]