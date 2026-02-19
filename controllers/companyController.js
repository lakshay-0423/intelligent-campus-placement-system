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

  const exists = companies.find(
    s => s.email === req.body.email
  );

  if (exists) {
    return res.status(400).json({
      message: "Company with this email already exists"
    });
  }

  const maxId = companies.length > 0
    ? Math.max(...companies.map(s => s.id))
    : 0;

  const newCompany = {
    id: maxId + 1,
    ...req.body
  };

  companies.push(newCompany);

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
