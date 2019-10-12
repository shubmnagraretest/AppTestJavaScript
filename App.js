var http = require('http');

const PORT = 1337;

function handleRequest(request , response){
    console.log(request.url);
    response.end('It works!! Path hit: '  + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT , function(){
    console.log('Server listening on : http://localhost:%s' , PORT);
});