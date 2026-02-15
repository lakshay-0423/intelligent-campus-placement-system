const express = require("express");
const fs = require("fs");

const router = express.Router();

//GET Student
router.get("/", (req, res) => {
  const students = JSON.parse(
    fs.readFileSync("./data/students.json")
  );
  res.json(students);
});

// POST student
router.post("/", (req, res) => {
  const students = JSON.parse(
    fs.readFileSync("./data/students.json")
  );

  students.push(req.body);

  fs.writeFileSync(
    "./data/students.json",
    JSON.stringify(students, null, 2)
  );

  res.status(201).json({ message: "Student added" });
});

module.exports = router;