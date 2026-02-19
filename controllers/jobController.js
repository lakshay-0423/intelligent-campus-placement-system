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

  const maxId = jobs.length > 0
    ? Math.max(...jobs.map(s => s.id))
    : 0;

  const newJob = {
    id: maxId + 1,
    ...req.body
  };

  jobs.push(newJob);

  fs.writeFileSync(
    "./data/jobs.json",
    JSON.stringify(jobs, null, 2)
  );

  res.status(201).json({ message: "Job created" });
};

exports.updateJob = (req, res) => {
  const id = parseInt(req.params.id);
  const jobs = JSON.parse(
    fs.readFileSync("./data/jobs.json")
  );

  const index = jobs.findIndex(c => c.id === id);
  jobs[index] = { ...jobs[index], ...req.body };

  fs.writeFileSync(
    "./data/jobs.json",
    JSON.stringify(jobs, null, 2)
  );

  res.json({ message: "Job updated" });
};

exports.deleteJob = (req, res) => {
  const id = parseInt(req.params.id);
  let jobs = JSON.parse(
    fs.readFileSync("./data/jobs.json")
  );

  jobs = jobs.filter(c => c.id !== id);

  fs.writeFileSync(
    "./data/jobs.json",
    JSON.stringify(jobs, null, 2)
  );

  res.json({ message: "Job deleted" });
};