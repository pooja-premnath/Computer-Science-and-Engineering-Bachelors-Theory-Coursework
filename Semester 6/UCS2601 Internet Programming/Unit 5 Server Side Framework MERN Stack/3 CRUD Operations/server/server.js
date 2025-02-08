// server.js
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const AnimalModel = require("./model/Animals");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/model_lab");

app.post("/animalEndPoint/insert", (req, res) => {
  const newAnimal = req.body;
  AnimalModel.create(newAnimal)
    .then((response) => {
      res.status(201).json(response); 
    })
    .catch((err) => {
      res.status(400).json(err); 
    });
});

app.put("/animalEndPoint/update", (req, res) => {
  const updatedAnimal = req.body;
  AnimalModel.findOneAndUpdate({ name: updatedAnimal.name }, updatedAnimal, { new: true })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.delete("/animalEndPoint/delete", (req, res) => {
  const { animalName } = req.query;
  AnimalModel.findOneAndDelete({ name: animalName })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
