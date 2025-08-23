const express = require('express');
const router = express.Router();

// Import routers
const authRouter = require('./auth.routes');
const prodRouter = require('./product.routes');

// Use them with prefixes if needed
router.use('/auth', authRouter);
router.use('/product', prodRouter);

module.exports = router;
