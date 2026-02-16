const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get('/', studentController.getStudents);
router.post('/',studentController.createStudents);

module.exports = router;