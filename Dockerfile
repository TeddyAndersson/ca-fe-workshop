FROM node:21-alpine

WORKDIR /app
COPY package.json .
RUN if [ "@NODE_ENV" = "development" ]; then npm install; else npm install --only=production; fi

COPY dist ./dist
RUN ls -al


CMD ["npm", "start"]