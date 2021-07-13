const express = require('express');
const auth = require('./auth');
const verification = require('./authorization');
const router = express.Router();

// router
router.post('/register', auth.register);
router.post('/login', auth.login);

// endpoint with authorization
router.get('/test-auth', verification("USER"), auth.notAkses);

module.exports = router;

