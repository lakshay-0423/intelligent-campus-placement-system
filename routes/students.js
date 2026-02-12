const fs = require("fs");
const readBody = require("../utils/readBody");

module.exports = (req, res) => {
  if (req.method === "GET") {
    const data = fs.readFileSync("./data/students.json");
    res.end(data);
  }

  if (req.method === "POST") {
    readBody(req, (student) => {
      const students = JSON.parse(fs.readFileSync("./data/students.json"));
      students.push(student);
      fs.writeFileSync("./data/students.json", JSON.stringify(students, null, 2));
      res.end("Student added");
    });
  }
};
