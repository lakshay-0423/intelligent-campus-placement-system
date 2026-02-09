const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=== '/health' && req.method==='GET'){
        res.writeHead(200,{"content-type" : "text/plain"});
        res.end("ok");
    }
    else if(req.url === '/info' && req.method === "GET"){
        res.writeHead(200,{"content-type" : "application/json"});
        res.end(JSON.stringify({project : "Intelligent Campus Placement System"}));
    }
    else{
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
});