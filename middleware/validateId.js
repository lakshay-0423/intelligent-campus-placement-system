const fs = require("fs");

const validateId = (filePath) => {
  return (req, res, next) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const data = JSON.parse(fs.readFileSync(filePath));
    const item = data.find(obj => obj.id === id);

    if (!item) {
      return res.status(404).json({ message: "ID not found" });
    }

    next();
  };
};

module.exports = validateId;
