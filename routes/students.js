const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const validateObjectId = require("../middleware/validateObjectId");
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.post(
  "/profile",
  protect,
  authorize("student"),
  studentController.createProfile
);

router.get(
  "/",
  protect,
  authorize("admin"),
  studentController.getStudents
);

router.post(
  "/",
  protect,
  authorize("admin"),
  studentController.createStudents
);

router.put(
  "/:id",
  protect,
  authorize("admin", "student"),
  validateObjectId,
  studentController.updateStudent
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  validateObjectId,
  studentController.deleteStudent
);

module.exports = router;