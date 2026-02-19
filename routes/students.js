const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const validateId = require("../middleware/validateId");

router.get('/', studentController.getStudents);

router.post('/',studentController.createStudents);

router.put(
  "/:id",
  validateId("./data/students.json"),
  studentController.updateStudent
);

router.delete(
  "/:id",
  validateId("./data/students.json"),
  studentController.deleteStudent
);

module.exports = router;