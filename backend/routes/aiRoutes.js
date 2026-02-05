const express = require('express');
const router = express.Router();

// ✅ IMPORT NAME: generateAIPlan (Spelling check karein)
const { generateAIPlan } = require('../controllers/aiController'); 
const { protect } = require('../middleware/authMiddleware');
const { getAIChatResponse } = require('../controllers/aiChatController');
// ... other imports ...

router.post('/chat', protect, getAIChatResponse); // Isme 'protect' middleware zaroori hai
// Debugging ke liye: Agar ye undefined aaya toh server crash hoga
if (!generateAIPlan) {
    console.error("❌ ERROR: generateAIPlan function nahi mila! aiController.js check karein.");
}

router.post('/generate-plan', protect, generateAIPlan);

module.exports = router;