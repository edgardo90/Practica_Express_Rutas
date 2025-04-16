const { createServer } = require('node:http');
const fs = require('node:fs');
//const http = require('node:http');

const HOME = fs.readFileSync('./index.html');
const ABOUT = fs.readFileSync('./about.html');

const PORT = 3000;
const HOSTNAME = '127.0.0.1'

const server = createServer((req, res) => {
    const {url} = req;
    //res.setHeader('Content-Type', 'text/plain')
    //res.setHeader('Content-Type', 'text/html')
    //res.statusCode = 200

    if(url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write(HOME)
    }else if( url === '/about'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.write(ABOUT)
    }else {
        res.statusCode = 404
        res.write("PAGINA NO ENCONTRADA")
    }

    res.end()
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`);
});
