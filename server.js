const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());           // Allow frontend connections
app.use(express.json());   // Parse JSON request bodies
require("dotenv").config();

mongoose.connect(process.env.mongodb+srv://pallvviidhiman_db_user:<db_password>@cluster0.yxfx8pn.mongodb.net/?appName=Cluster0)
// mongoose
//  .connect("mongodb://127.0.0.1:27017/mernusers")
//  .then(() => console.log("MongoDB Connected"));

const User = require("./models/User");

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const newUser = new User({
    name: req.body.name
  });
  await newUser.save();
  res.json(newUser);
});

app.listen(5000, () => {
  console.log("Server Running on port 5000");
});