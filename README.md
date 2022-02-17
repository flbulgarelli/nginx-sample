# Precondiciones

* Instalar `docker`
* Instalar `npm`

# Instalación

```bash
npm install
```

# Iniciar los servidores

```bash
# Iniciar el primer servidor
node index.js 8081
# Iniciar el segundo servidor
node index.js 8082
# Iniciar el tercer servidor
node index.js 8083
```

# Iniciar el balanceador

```bash
docker run --rm --net=host -v /home/franco/tmp/nginx-sample/nginx.conf:/etc/nginx/nginx.conf:ro  nginx
```

Luego consultar http://localhost:8080

Más información: https://hub.docker.com/_/nginx