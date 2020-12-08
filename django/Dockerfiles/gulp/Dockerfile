FROM node:lts-buster-slim

# set work directory
WORKDIR /app

# install software
RUN apt update
# dependencies gulp-sass
RUN apt install -y build-essential python2-dev python3-dev
# gulp
RUN npm install -g gulp-cli
# dependencies gulp
RUN npm rebuild node-sass
RUN npm i gulp browser-sync gulp-sourcemaps gulp-rename gulp-sass
