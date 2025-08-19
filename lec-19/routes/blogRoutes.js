const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');
const User = require('../model/user');
const { postAddBlog, getOneBlog, getAllBlogs, deleteOneBlog } = require('../controller/blogController');

// Get all blogs
router.get("/", getAllBlogs);

// Get blog by ID
router.get("/:id", getOneBlog);

// Create blog
router.post("/", postAddBlog);

// Delete blog
router.delete("/:blogId", deleteOneBlog);

module.exports = router;
