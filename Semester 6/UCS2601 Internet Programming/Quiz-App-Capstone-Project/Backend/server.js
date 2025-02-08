const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AdminModel = require("./models/adminModel");
const ScoresModel = require("./models/scores");
const UsersModel = require("./models/users");
const QuestionsModel = require("./models/questionsModel");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/quiz");

app.post("/verifyAdmin", (req, res) => {
  AdminModel.find({ password: req.body.password })
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json(data[0]);
      } else {
        res.status(401).json("wrong password!");
      }
    })
    .catch((err) => console.log(err));
});

app.get("/getUserScores", (req, res) => {
  ScoresModel.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.post("/verifyUser", (req, res) => {
  UsersModel.find({ username: req.body.username, password: req.body.password })
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json(data[0]);
      } else {
        res.status(401).json("wrong password!");
      }
    })
    .catch((err) => console.log(err));
});

app.get("/getQuestions", (req, res) => {
  QuestionsModel.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.post("/updateScore", (req, res) => {
  ScoresModel.findOneAndUpdate(
    { username: req.body.username },
    { score: req.body.score },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).catch((err) => console.log(err));
});

app.listen(3001, () => {});
