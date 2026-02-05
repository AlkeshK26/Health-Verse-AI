const axios = require('axios');

const analyzeMeal = async (req, res) => {
  try {
    const { image } = req.body; // Base64 image
    const API_KEY = process.env.GEMINI_API_KEY;

    // Specialized System Prompt for Vegetarian Muscle Gain
    const systemPrompt = `Act as the Lead Clinical Dietitian & Vision AI Specialist for HealthVerse AI. 

USER CONTEXT:
- Profile: 23-year-old Vegetarian, 67kg, 167cm.
- Objective: 60-Day 'Visible Abs' Protocol (Caloric Deficit).
- Focus: High Protein preservation & Micronutrient density.

TASK:
Perform a Comprehensive Nutritional Fingerprinting of the uploaded Indian Vegetarian meal image.

OUTPUT SECTIONS (Markdown Format):

1. 🍽️ QUANTITATIVE IDENTIFICATION:
   - Identify every ingredient/item (e.g., Moong Dal, Brown Rice, Paneer).
   - Estimate portion size in grams (g) or ml based on visual volume.

2. 📊 MACRONUTRIENT ARCHITECTURE:
   - Calculate: Total Calories, Protein (Highlight this), Net Carbs, Total Fats, and **Fiber**.

3. 🧪 MICRONUTRIENT & MINERAL DENSITY (The 'Lens' Detail):
   - Provide a detailed list of Vitamins detected (A, B-Complex, C, D, E, K).
   - Provide a list of Minerals (Iron, Calcium, Zinc, Magnesium, Potassium).
   - Use standard units (mg/mcg).

4. 🥗 BIOAVAILABILITY & ABSORPTION:
   - Is this a "Complete Protein"? If not, suggest a vegetarian pairing (e.g., adding lemon for Iron absorption or combining grains with legumes).

5. 🚀 ELITE COACH INSIGHT (1-2 Sentences):
   - Specifically explain how this meal affects the 60-day 'Visible Abs' goal (Insulin response, satiety, or thermic effect).

STYLING:
- Use professional Markdown tables.
- Use emojis for every category.
- Keep the tone scientific yet motivating.`;

    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const requestBody = {
      contents: [{
        parts: [
          { text: systemPrompt },
          { inline_data: { mime_type: "image/jpeg", data: image } }
        ]
      }]
    };

    const response = await axios.post(url, requestBody);
    const analysis = response.data.candidates[0].content.parts[0].text;

    res.status(200).json({ success: true, analysis });
  } catch (error) {
    console.error("Vision Error:", error.message);
    res.status(500).json({ success: false, message: "Vision Engine Busy" });
  }
};

module.exports = { analyzeMeal };