FROM debian:unstable-slim

# set work directory
WORKDIR /usr/src/app

RUN apt update
RUN apt install -y python3-dev python3-pip

# install dependencies
RUN pip3 install --upgrade pip
COPY ./requirements.txt .
RUN pip3 install -r requirements.txt
