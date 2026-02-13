const http = require('http');
const studentRoutes = require("./routes/students");
const companyRoutes = require("./routes/conmpanies");
const teacherRoutes = require("./routes/teachers");

const server = http.createServer((req, res) => {
    if (req.url === "/students") studentRoutes(req, res);
    if (req.url === "/teachers") teacherRoutes(req, res);
    if (req.url === "/companies") companyRoutes(req, res);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});