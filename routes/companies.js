const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", companyController.getCompanies);

router.post("/", companyController.createCompany);

router.put(
  "/:id",
  validateObjectId,
  companyController.updateCompany
);

router.delete(
  "/:id",
  validateObjectId,
  companyController.deleteCompany
);

module.exports = router;
