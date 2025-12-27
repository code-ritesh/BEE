const express = require('express');
const User = require("./model/user.schema");   

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/user/register", async (req, res) => {
  const { user, email, password } = req.body;

  // check if user already exists
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(400).json({ message: "User already exists" }); // return added
  }

  // create new user (mocked in Jest)
  await User.create({
    user,
    email,
    password
  });

  return res.json({
    message: "User registered successfully" // return exact message expected by Jest
  });
});

module.exports = app;
