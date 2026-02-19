const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
const validateId = require("../middleware/validateId");

router.get("/", companyController.getCompanies);

router.post("/", companyController.createCompany);

router.put(
  "/:id",
  validateId("./data/companies.json"),
  companyController.updateCompany
);

router.delete(
  "/:id",
  validateId("./data/companies.json"),
  companyController.deleteCompany
);

module.exports = router;
