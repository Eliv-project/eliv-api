FROM node:18-alpine As base
# yarn already included in node
# RUN npm i -g yarn 

###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM base as dev

RUN npm i -g @nestjs/cli

WORKDIR /usr/src/app

COPY --chown=node:node ./api/package*.json ./
COPY --chown=node:node ./api/yarn*.lock ./
RUN   yarn

COPY --chown=node:node  ./api .

USER node


# ###################
# # BUILD FOR PRODUCTION
# ###################

# FROM base as build

# WORKDIR /usr/src/app

# COPY --chown=node:node ./package*.json ./
# COPY --chown=node:node ./yarn*.lock ./
# COPY --chown=node:node --from=dev /usr/src/app/node_modules ./node_modules
# COPY --chown=node:node . .

# RUN yarn && yarn cache clean

# ENV NODE_ENV production

# USER node

# ###################
# # PRODUCTION
# ###################

# FROM base As production

# COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
# COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# CMD [ "node", "dist/main.js" ]