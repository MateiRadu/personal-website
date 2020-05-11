FROM node:12-alpine AS build
COPY . .
RUN npm install
RUN npm run build

FROM steebchen/nginx-spa:latest
COPY --from=build ./dist /app/
RUN chmod -R 777 /app
