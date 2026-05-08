
const express = require("express");
// const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const User = require("./models/User");

         // Allow frontend connections
app.use(express.json());   // Parse JSON request bodies


mongoose.connect(process.env.MONGO_URI);
// mongoose
//  .connect("mongodb://127.0.0.1:27017/mernusers")
//  .then(() => console.log("MongoDB Connected"));


// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// app.post("/users", async (req, res) => {
//   const newUser = new User({
//     name: req.body.name
//   });
//   await newUser.save();
//   res.json(newUser);
// });
const cors = require("cors");

app.use(cors({
  origin: "*"
}));
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running`);
});