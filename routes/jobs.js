const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const validateId = require("../middleware/validateId");

router.get("/", jobController.getJobs);

router.post("/", jobController.createJob);

router.put(
  "/:id",
  validateId("./data/jobs.json"),
  jobController.updateJob
);

router.delete(
  "/:id",
  validateId("./data/jobs.json"),
  jobController.deleteJob
);

module.exports = router;
