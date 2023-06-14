require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const corsOption = {origin: '*'};
app.use(cors(corsOption));
const studentRouter = require("./api/students/student.router");


app.use(express.json());

app.use("/api/students", studentRouter);
const port = process.env.APP_PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});