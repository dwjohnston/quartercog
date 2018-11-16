FROM node:9.6.1 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --production
COPY . /usr/src/app
RUN npm run build

FROM node:9.6.1-alpine

COPY --from=builder /usr/src/app /usr/app
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
ENV PORT 80
CMD ["node", "/usr/app/public/index.js"]
#CMD ["ls", "/usr/public"]