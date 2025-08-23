const express = require('express');
const router = express.Router();

// Import routers
const authRouter = require('./auth.routes');


// Use them with prefixes if needed
router.use('/auth', authRouter);


module.exports = router;
