const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");
const applicationController = require("../controllers/applicationController");

router.post(
  "/:jobId",
  protect,
  authorize("Student"),
  applicationController.applyJob
);

module.exports = router;