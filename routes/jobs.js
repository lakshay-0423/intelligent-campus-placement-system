const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", jobController.getJobs);

router.post("/", jobController.createJob);

router.put(
  "/:id",
  validateObjectId,
  jobController.updateJob
);

router.delete(
  "/:id",
  validateObjectId,
  jobController.deleteJob
);

module.exports = router;
