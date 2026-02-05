const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    saveWorkout, 
    removeWorkout, // <--- Import zaroori hai
    getMe 
} = require('../controllers/authController');

const { protect } = require('../middleware/authMiddleware');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);           // Dashboard data ke liye
router.post('/save-workout', protect, saveWorkout); // Save karne ke liye
router.delete('/remove-workout/:id', protect, removeWorkout); // <--- DELETE ROUTE

module.exports = router;