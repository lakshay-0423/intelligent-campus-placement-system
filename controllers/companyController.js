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

exports.updateCompany = (req, res) => {
  const id = parseInt(req.params.id);
  const companies = JSON.parse(
    fs.readFileSync("./data/companies.json")
  );

  const index = companies.findIndex(c => c.id === id);
  companies[index] = { ...companies[index], ...req.body };

  fs.writeFileSync(
    "./data/companies.json",
    JSON.stringify(companies, null, 2)
  );

  res.json({ message: "Company updated" });
};

exports.deleteCompany = (req, res) => {
  const id = parseInt(req.params.id);
  let companies = JSON.parse(
    fs.readFileSync("./data/companies.json")
  );

  companies = companies.filter(c => c.id !== id);

  fs.writeFileSync(
    "./data/companies.json",
    JSON.stringify(companies, null, 2)
  );

  res.json({ message: "Company deleted" });
};
