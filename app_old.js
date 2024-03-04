const http = require('http');

http.createServer((req, res) => {
    //console.log(req)
    res.write('hello world');
    res.end();
}).listen(8080);

console.log('escuchando el puerto 8080')
