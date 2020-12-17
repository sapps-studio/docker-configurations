#!/bin/sh

# Collect static files
echo "Collect static files"
python3 manage.py collectstatic --noinput

# Add crontab
python3 manage.py crontab remove
python3 manage.py crontab add

# Compile messages
python3 manage.py compilemessages

# Apply database migrations
echo "Apply database migrations"
python3 manage.py makemigrations
python3 manage.py migrate

# Start server
echo "Starting server"
uvicorn --host 0.0.0.0 --port 8000 --reload asgi:application
