const express = require("express");
const studentRoutes = require("./routes/students");
const companyRoutes = require("./routes/companies");
const jobRoutes = require("./routes/jobs");
const logger = require("./middleware/logger");

const app = new express();

app.use(express.json());
app.use(logger);
app.use("/students", studentRoutes);
app.use("/companies", companyRoutes);
app.use("/jobs", jobRoutes);

app.get('/',(req,res)=>{
    res.send("Intelligent Campus Placement System API");
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});