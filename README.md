# Precondiciones

* Instalar `docker`
* Instalar `node`

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

## Diagrama de despliegue

![diagrama](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKf9B4bCIYnELG0HBgakYINvnLnSUVaf896SnBparCIK_2A8G75gKLaca6U8oZL2vHfpSI7fLD3LjKDen2bZf80fXJ0FhXyaWU9Ik7vq6GMub3669eVKl1IWtm40)

## Más información

* https://hub.docker.com/_/nginx
* https://nginx.org/
