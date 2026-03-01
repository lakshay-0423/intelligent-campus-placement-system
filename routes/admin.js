const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const adminController = require("../controllers/adminController");

router.get(
  "/dashboard",
  protect,
  authorize("admin"),
  adminController.getDashboardStats
);

module.exports = router;