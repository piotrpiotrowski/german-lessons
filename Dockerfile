FROM nginx:alpine

COPY dist/* /usr/share/nginx/html/

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
