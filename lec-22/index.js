const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Blog = require('./model/blog');
const User = require('./model/user');
const isLogin = require('./middleware/isLogin');
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//create
app.post("/blogs", isLogin, async (req, res) => {
  try {
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.user.id; // now comes from token, not body

    let user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "Invalid user"
      });
    }

    let blog = {
      title,
      body,
      date: Date.now(),
      userId
    };

    let newBlog = new Blog(blog);
    await newBlog.save();

    user.blogs.push(newBlog._id);
    await user.save();

    res.json({
      success: true,
      message: "Blog added successfully",
      data: newBlog
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// Create a new user
// Create a new user (signup)
app.post("/users", async (req, res) => {
  try {
    let { name, email, password } = req.body;

    let newUser = new User({
      name,
      email,
      password,
      blogs: []
    });

    await newUser.save();

    // ✅ Generate token right here
    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: "1h" });

    res.json({
      success: true,
      message: "User added successfully",
      data: newUser,
      token
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



//delete -> blog id  user id  
app.delete( "/blogs/:blogId" , async (req , res) =>{
    let blogs = req.params.blogId
    let userId = req.body.userId

    let blogExist = await Blog.findById(blogs);

    if(!blogExist){
        res.json({
            success : false,
            message : "blog does not exist"
        })
    }

    if(blogExist.userId != userId){
        return res.json({
            success : false,
            message : "permision denied"
        })
    }

    await Blog.findByIdAndDelete(blogId)
})

//read , read all and read single 

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

app.listen(3000, () => {
  console.log('Server started');
});

app.get("/blogs", async(req, res) => {
    let allBlogs = await Blog.find();
    res.json({
        success: true,
        message: "all data fetched successfully",
        data:allBlogs
    })
})


app.get("/blogs/:id",async(req, res) => {
    let id = req.params.id;
    let blog = await Blog.findById(id);
    res.json({
        success: true,
        message: "Blog fetched successfully",
        data:blog
    })
})