const fs = require("fs");
const readBody = require("../utils/readBody");

module.exports = (req, res) => {
    if (req.method === "GET") {
        const data = fs.readFileSync("./data/teachers.json");
        res.end(data);
    }

    if (req.method === "POST") {
        readBody(req, (teacher) => {
            const teachers = JSON.parse(fs.readFileSync("./data/teachers.json"));
            teachers.push(teacher);
            fs.writeFileSync("./data/teachers.json", JSON.stringify(teachers, null, 2));
            res.end("teacher added");
        });
    }
};
