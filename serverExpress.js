const express = require('express')
const app = express()
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const fs = require('node:fs')
const {infoLenguajes} = require('./src/lenguajesFrontBack');

const HOME = fs.readFileSync('./index.html');
const ABOUT = fs.readFileSync('./about.html');

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo! Bienvenido al server con express!</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Hola Mundo! Bienvenido al server con express desde ABOUT!</h1>')
})


app.get('/api', (req, res) => {
    res.send('<h1>Hola Mundo! Bienvenido al server con express desde /api!</h1>')
})

app.get('/api/lenguajes', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    res.send(JSON.stringify(infoLenguajes))
})

app.get('/api/lenguajes/frontend', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    res.send(JSON.stringify(infoLenguajes.frontend))
})

app.get('/api/lenguajes/frontend', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    res.send(JSON.stringify(infoLenguajes.frontend))
})

app.get('/api/lenguajes/frontend/:lenguaje/', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const paramOrdenar = req.query.ordenar;
    const otroParam = req.query.otroParam;
    
    console.log("El valor del query param ordenar es:", paramOrdenar)
    
    console.log("El valor del otro param query es:", otroParam)

    res.setHeader('Content-Type', 'application/json')
    res.status(200)

    const filtrado = infoLenguajes.frontend.filter(
        //(lenguajes) => { return lenguajes.nombre.toLocaleLowerCase() === lenguaje.toLocaleLowerCase() }
        lenguajes => lenguajes.nombre.toLocaleLowerCase() === lenguaje.toLocaleLowerCase()
    )

    //console.log("Los lenguajes filtrados son: ",filtrado)

    if(filtrado.length === 0){
        return res.status(404).send(`No se encontró en el curso de frontend el lenguaje:${lenguaje}`)
    }

    if(paramOrdenar === "arriba"){
        res.send(JSON.stringify(filtrado.sort(
            (a,b) => b.cantidadAlumnos - a.cantidadAlumnos
        )))
    }else if (paramOrdenar === "abajo"){
        res.send(JSON.stringify(filtrado.sort(
            (a,b) => a.cantidadAlumnos - b.cantidadAlumnos
        )))
    }else{
        return res.status(200).send(filtrado)
    }

    res.send(filtrado)
})

app.get('/api/lenguajes/frontend/:urlParam/:otroUrlParam', (req, res) => {
    const urlParam = req.params.urlParam
    const otroUrlParam = req.params.otroUrlParam
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    res.send(`${urlParam} ${otroUrlParam}`)
})

app.get('/api/lenguajes/backend', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    res.send(JSON.stringify(infoLenguajes.backend))
})

app.get('/{*any}', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.status(404)
    res.send("la ruta a la que quiere ingresar, no existe")
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor Express está corriendo en http://${HOSTNAME}:${PORT}/`);
});
