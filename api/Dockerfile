FROM node:18-slim As base
# yarn already included in node
# RUN npm i -g yarn 

###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM base as dev

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y openssl

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn*.lock ./

RUN  yarn install --frozen-lockfile

COPY --chown=node:node . .

RUN yarn prisma:gen

CMD sh -c "yarn prisma:migrate:docker && yarn prisma:seed:docker && yarn start:dev"

# ###################
# BUILD FOR PRODUCTION
# ###################

FROM base As prod

WORKDIR /eliv/build
RUN chown -R node:node /eliv

RUN apt-get  update
RUN apt-get install -y openssl

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn*.lock ./

COPY --chown=node:node . .
RUN yarn install --production --frozen-lockfile
RUN yarn prisma:gen



RUN yarn build

CMD sh -c "yarn prisma:migrate:docker && yarn prisma:seed:docker && yarn start:prod"
