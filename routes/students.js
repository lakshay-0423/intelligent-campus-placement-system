const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const validateObjectId = require("../middleware/validateObjectId");

router.get('/', studentController.getStudents);

router.post('/',studentController.createStudents);

router.put(
  "/:id",
  validateObjectId,
  studentController.updateStudent
);

router.delete(
  "/:id",
  validateObjectId,
  studentController.deleteStudent
);

module.exports = router;