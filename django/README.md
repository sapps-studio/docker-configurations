# Run development

``` sh
docker-compose -f docker-compose.dev.yaml up
```

Now open:

`http://api.localhost`

### Other domains

- Caddy: `http://api.localhost`.
- Gulp: `http://localhost:3000`.
- Django: `http://localhost:8000`.
- Mailhog: `http://localhost:8025`.
- Postgres: `localhost:5432`.

### Bash Django

``` shell
docker exec -it api_django_1 bash
```

# Run production

``` sh
docker-compose up -d
```

Open `https://domain.com`.
