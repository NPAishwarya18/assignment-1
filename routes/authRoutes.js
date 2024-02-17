const express = require('express');
const router = express.Router();
const { validateAuthorInput } = require('../middleware/authMiddleware');

router.post('/login', validateAuthorInput, (req, res) => {
  // Handle login logic
});

router.post('/register', validateAuthorInput, (req, res) => {
  // Handle registration logic
});

module.exports=router;