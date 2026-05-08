require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");

const app = express();


// Middleware
app.use(cors());

app.use(express.json());


// Root Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


// GET Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// POST User
app.post("/users", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name
    });

    await newUser.save();

    res.json(newUser);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});