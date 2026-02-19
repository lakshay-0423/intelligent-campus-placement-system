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

exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const students = JSON.parse(
    fs.readFileSync("./data/students.json")
  );

  const index = students.findIndex(s => s.id === id);

  students[index] = { ...students[index], ...req.body };

  fs.writeFileSync(
    "./data/students.json",
    JSON.stringify(students, null, 2)
  );

  res.json({ message: "Student updated" });
};

exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  let students = JSON.parse(
    fs.readFileSync("./data/students.json")
  );

  students = students.filter(s => s.id !== id);

  fs.writeFileSync(
    "./data/students.json",
    JSON.stringify(students, null, 2)
  );

  res.json({ message: "Student deleted" });
};
