const Company = require("../models/Company");

exports.getCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    next(error);
  }
};

exports.createCompany = async (req, res, next) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    next(error);
  }
};

exports.updateCompany = async (req, res, next) => {
  try {
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!company)
      return res.status(404).json({ message: "Company not found" });

    res.json(company);
  } catch (error) {
    next(error);
  }
};

exports.deleteCompany = async (req, res, next) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);

    if (!company)
      return res.status(404).json({ message: "Company not found" });

    res.json({ message: "Company deleted" });
  } catch (error) {
    next(error);
  }
};