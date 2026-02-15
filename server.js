const express = require("express");
const studentRoutes = require("./routes/students");

const app = new express();

app.use(express.json());
app.use("/students", studentRoutes);

app.get('/',(req,res)=>{
    res.send("Intelligent Campus Placement System API");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/info", (req, res) => {
  res.json({ project: "Intelligent Campus Placement System" });
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});