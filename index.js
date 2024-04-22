const  http = require('http')
const fs = require('fs')


const server = http.createServer((req,res) => {
if (req.url == '/') {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
} else if (req.url == '/about') {
    fs.readFile('./about.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
} else if (req.url == '/contact-me') {
    fs.readFile('./contact-me.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
} else {
    fs.readFile('./404.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
}
}).listen(3000);