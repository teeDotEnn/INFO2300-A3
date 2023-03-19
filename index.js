const fs = require('fs');
const http = require('http');
const PORT =  process.env.PORT||8080;

const httpServer = http.createServer(httpHandler);

httpServer.listen(PORT, "",()=>{
    console.log(`Listening on port ${PORT}`);
});

function httpHandler(request, response){
    console.log(` Request from ${request.ip} for ${request.url}`);
    
    if(request.url === '/'){
        request.url = 'index.html';
    }

    fs.readFile('./pub/' + request.url, (err,data) =>{
        if(err == null){
            response.writeHead(200, {'Content-Type':'text/html'})
            response.write(data);
            response.end()
        }
        else{
            console.log("returning 404");
            fs.readFile('./priv/404.html', (err, data) =>{
                if(err == null){
                    response.writeHead(404, {'Content-Type':'text/html'})
                    response.write(data);
                    response.end()
                }
            })
        }
    })
}

