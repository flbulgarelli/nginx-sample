const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/', (req, res) => {
  res.send(`¡hola mundo desde ${port}!`)
})

app.listen(port, () => {
  console.log(`Servidor iniciado en ${port}`)
})

