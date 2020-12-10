FROM debian:stable-slim

# set work directory
WORKDIR /usr/src/app

# install software
RUN apt update
RUN apt install -y build-essential cron python3-pip gettext

# install dependencies
RUN pip3 install --upgrade pip
COPY ./requirements.txt .
RUN pip3 install -r requirements.txt

# launcher
COPY django-launcher.sh /django-launcher.sh
RUN chmod +x /django-launcher.sh
