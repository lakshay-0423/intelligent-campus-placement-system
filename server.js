const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url=== '/students' && req.method==='GET'){
        const students = fs.readFileSync("./data/students.json","utf-8");
        res.writeHead(200,{"content-type" : "text/plain"});
        res.end(students);
    }
    else{
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
});