const User = require("../models/User");
const Student = require("../models/Student");
const Company = require("../models/Company");
const Job = require("../models/Job");
const Application = require("../models/Application");

exports.getDashboardStats = async (req, res, next) => {
  try {
    const stats = {
      users: await User.countDocuments(),
      students: await Student.countDocuments(),
      companies: await Company.countDocuments(),
      jobs: await Job.countDocuments(),
      applications: await Application.countDocuments(),
    };

    res.json(stats);
  } catch (error) {
    next(error);
  }
};