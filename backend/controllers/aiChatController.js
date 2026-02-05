const axios = require('axios');

const getAIChatResponse = async (req, res) => {
  try {
    const { message, history, userProfile } = req.body;
    const API_KEY = process.env.GEMINI_API_KEY;

    // Directing AI to stay in character for 'HealthVerse AI'
    const systemPrompt = `You are the Elite HealthVerse AI Coach.
    User Stats: Age ${userProfile.age}, Weight ${userProfile.weight}kg, Goal: ${userProfile.goal}, Diet: ${userProfile.dietaryPreference}.
    Instructions: Provide scientific fitness advice. Use emojis. Focus on the 60-day visible abs goal.`;

    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash-lite:generateContent?key=${API_KEY}`;

    const requestBody = {
      contents: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "Acknowledged. HealthVerse AI is online." }] },
        ...history,
        { role: "user", parts: [{ text: message }] }
      ]
    };

    const response = await axios.post(url, requestBody);
    const aiResponse = response.data.candidates[0].content.parts[0].text;

    res.status(200).json({ success: true, response: aiResponse });
  } catch (error) {
    // Handling the 429 error seen in your terminal
    console.error("❌ API ERROR:", error.response ? error.response.status : error.message);
    const status = error.response ? error.response.status : 500;
    res.status(status).json({ 
      success: false, 
      message: status === 429 ? "Daily Quota Full! Use a new API Key." : "AI Server Error" 
    });
  }
};

// Exporting using CommonJS to match your server setup
module.exports = { getAIChatResponse };