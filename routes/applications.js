const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const applicationController = require("../controllers/applicationController");

router.post(
  "/:jobId",
  protect,
  authorize("student"),
  applicationController.applyJob
);

module.exports = router;