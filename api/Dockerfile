FROM node:18-alpine As base
# yarn already included in node
# RUN npm i -g yarn 

###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM base as dev

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn*.lock ./

RUN  yarn install --frozen-lockfile

COPY --chown=node:node . .

RUN apk add --update --no-cache openssl1.1-compat
RUN yarn prisma:gen

CMD sh -c "yarn prisma:migrate:docker && yarn prisma:seed:docker && yarn start:dev"

# ###################
# BUILD FOR PRODUCTION
# ###################

FROM base As prod

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn*.lock ./

RUN yarn install --production --frozen-lockfile

COPY --chown=node:node . .

RUN apk add --update --no-cache openssl1.1-compat
RUN yarn prisma:gen

CMD sh -c "yarn prisma:migrate:docker && yarn prisma:seed:docker && yarn start:prod"