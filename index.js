const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// env
require("dotenv").config();

const userRoutes=require('./routes/userRoutes')
const employeeRoutes=require('./routes/employeeRoutes')
const app = express();

connectDB();
app.get("/",(req,res)=>{
  res.send("base api")
})

app.use(express.json());
app.use(cors());

app.use("/api/auth", userRoutes);
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

