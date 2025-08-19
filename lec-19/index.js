const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Blog = require('./model/blog');
const User = require('./model/user');

let blogRoutes = require("./routes/blogRoutes");
let userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.error("DB Connection Error: ", err));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

