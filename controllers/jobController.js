const fs = require("fs");

exports.getJobs = (req, res) => {
  const jobs = JSON.parse(
    fs.readFileSync("./data/jobs.json")
  );
  res.json(jobs);
};

exports.createJob = (req, res) => {
  const jobs = JSON.parse(
    fs.readFileSync("./data/jobs.json")
  );

  jobs.push(req.body);

  fs.writeFileSync(
    "./data/jobs.json",
    JSON.stringify(jobs, null, 2)
  );

  res.status(201).json({ message: "Job created" });
};
