const express = require('express');
const router = express.Router();

// middleware
//const { authCheck, adminCheck } = require('../middleware/auth');

// controller
const { createOrUpdateUser } = require('../controllers/auth');

// Routes
router.post('/create-or-update-user', createOrUpdateUser);

module.exports = router;