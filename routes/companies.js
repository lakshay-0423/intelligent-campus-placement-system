const fs = require("fs");
const readBody = require("../utils/readBody");

module.exports = (req, res) => {
    if (req.method === "GET") {
        const data = fs.readFileSync("./data/companies.json");
        res.end(data);
    }

    if (req.method === "POST") {
        readBody(req, (company) => {
            const companies = JSON.parse(fs.readFileSync("./data/companies.json"));
            companies.push(company);
            fs.writeFileSync("./data/companies.json", JSON.stringify(companies, null, 2));
            res.end("company added");
        });
    }
};
