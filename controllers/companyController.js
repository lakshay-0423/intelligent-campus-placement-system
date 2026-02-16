const fs = require("fs");

exports.getCompanies = (req, res) => {
  const companies = JSON.parse(
    fs.readFileSync("./data/companies.json")
  );
  res.json(companies);
};

exports.createCompany = (req, res) => {
  const companies = JSON.parse(
    fs.readFileSync("./data/companies.json")
  );

  companies.push(req.body);

  fs.writeFileSync(
    "./data/companies.json",
    JSON.stringify(companies, null, 2)
  );

  res.status(201).json({ message: "Company created" });
};
