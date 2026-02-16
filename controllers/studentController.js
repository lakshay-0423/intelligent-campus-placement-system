const fs = require('fs');

exports.getStudents = (req,res) => {
    const students = JSON.parse(
        fs.readFileSync("./data/students.json")
    );
    res.json(students);
};

exports.createStudents = (req,res) => {
    const students = JSON.parse(
        fs.readFileSync("./data/students.json")
    );

    students.push(req.body);

    fs.writeFileSync(
        "./data/students.json",
        JSON.stringify(students,null,2)
    );

    res.status(201).json({message : "Student Created"});
};