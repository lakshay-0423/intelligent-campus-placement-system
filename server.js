const http = require('http');
const studentRoutes = require("./routes/students");

const server = http.createServer((req, res) => {
    if (req.url === "/students") {
        studentRoutes(req, res);
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});