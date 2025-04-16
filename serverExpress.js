const express = require('express')
const app = express()
const HOSTNAME = '127.0.0.1';
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo! Bienvenido al server con express!</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Hola Mundo! Bienvenido al server con express desde ABOUT!</h1>')
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor Express está corriendo en http://${HOSTNAME}:${PORT}/`);
});
