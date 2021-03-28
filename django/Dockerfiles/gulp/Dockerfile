FROM debian:unstable-slim

# set work directory
WORKDIR /usr/src/app

# install software
RUN apt update
RUN apt -y upgrade
# dependencies
RUN apt install -y build-essential nodejs npm

# gulp
RUN npm install -g gulp-cli

# Add package.json
COPY package.json package.json

# dependencies gulp
RUN npm i
