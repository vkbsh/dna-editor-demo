# install (frontend)
FROM node:20-alpine as install
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .

# dev server (frontend)
FROM install AS development
EXPOSE 5173
CMD ["npm", "run", "dev"]

# build (frontend)
FROM install as build
RUN npm run build 

# prod server (frontend)
FROM nginx:1.21.0-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
