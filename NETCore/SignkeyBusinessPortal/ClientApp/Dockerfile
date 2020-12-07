FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
COPY dist/sale-console /usr/share/nginx/html

CMD ["sh", "-c", "nginx -g \"daemon off;\""]
