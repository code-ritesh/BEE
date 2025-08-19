const express = require('express');
const { postCreateUser } = require('../controller/userController');
const router = express.Router();

// Create a new user
router.post("/", postCreateUser);

module.exports = router;
