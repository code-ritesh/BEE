const Blog = require('../model/blog');
const User = require('../model/user');

// Create Blog
const postAddBlog = async (req, res) => {
  try {
    let { title, body, userId } = req.body;
    let user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "Invalid user"
      });
    }

    let newBlog = new Blog({
      title,
      body,
      date: Date.now(),
      userId
    });

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
};

// Delete Blog
const deleteOneBlog = async (req, res) => {
  try {
    let blogId = req.params.blogId;
    let userId = req.body.userId;

    let blogExist = await Blog.findById(blogId);

    if (!blogExist) {
      return res.json({
        success: false,
        message: "Blog does not exist"
      });
    }

    if (blogExist.userId.toString() !== userId) {
      return res.json({
        success: false,
        message: "Permission denied"
      });
    }

    await Blog.findByIdAndDelete(blogId);

    res.json({
      success: true,
      message: "Blog deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all Blogs
const getAllBlogs = async (req, res) => {
  try {
    let allBlogs = await Blog.find();
    res.json({
      success: true,
      message: "All data fetched successfully",
      data: allBlogs
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get single Blog
const getOneBlog = async (req, res) => {
  try {
    let id = req.params.id;
    let blog = await Blog.findById(id);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }
    res.json({
      success: true,
      message: "Blog fetched successfully",
      data: blog
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  postAddBlog,
  deleteOneBlog,
  getAllBlogs,
  getOneBlog
};
