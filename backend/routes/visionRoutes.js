const express = require('express');
const router = express.Router();
const { analyzeMeal } = require('../controllers/visionController');
const { protect } = require('../middleware/authMiddleware'); // Ensure user is logged in

router.post('/analyze-meal', protect, analyzeMeal);

module.exports = router;