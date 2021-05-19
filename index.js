//Variables declartion
const http = require('http');
const url = require('url');
const fs = require('fs');

//Creation of sever an req, res
http.createServer(function (req, res)
{
    if (req.url === '/') {
        //Link of index
        fs.readFile('index.html', function (err, data) {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
                return res.end();
                
        });
        
    } else if (req.url === '/about') {
        //Link of about
        fs.readFile('about.html', function (err, data) {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
                return res.end();
                
        });
        
    } else if (req.url === '/contact-me') {
        //Link of about-me
        fs.readFile('contact-me.html', function (err, data) {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
                return res.end();
                
        });
        
    }else{
        //Link if page if not found
        fs.readFile('404.html', function (err, data) {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
                return res.end();         
        });
        
    }
   

}).listen(9090);
//Listen port 9090