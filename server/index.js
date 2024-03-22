const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EmployeeModel = require("./models/Employee");
const app = express();
const port = 3001;
app.use(express.json());

app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/employee")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The Password is incorrect");
      }
    } else {
      res.json("User Not Found");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.listen(port, () => {
  console.log("Server is runing");
});
