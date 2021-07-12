const express = require('express');
const auth = require('./auth');
const router = express.Router();

// router
router.post('/register', auth.register);

module.exports = router;

