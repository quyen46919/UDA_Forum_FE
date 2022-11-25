FROM node:14-alpine
WORKDIR /accacou
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]