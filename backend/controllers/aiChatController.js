const axios = require('axios');

const getAIChatResponse = async (req, res) => {
  try {
    const { message, history, userProfile } = req.body;
    const API_KEY = process.env.GEMINI_API_KEY; // Secure environment variable

    // ✅ NORMAL ASSISTANT PROMPT: Friendly and helpful without being too "strict"
    const systemPrompt = `You are HealthVerse AI, a friendly and helpful fitness assistant. 
    You have access to the user's profile to provide personalized answers when asked:
    - User Stats: Age ${userProfile.age}, Weight ${userProfile.weight}kg, Height ${userProfile.height}cm.
    - Focus: Achieving visible abs and maintaining a high-protein diet.
    
    Be conversational, use some emojis, and stay helpful. If the user asks general questions, answer normally.`;

const url =`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
    const requestBody = {
      contents: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "Hello! I'm HealthVerse AI. How can I help you with your fitness journey today?" }] },
        ...history,
        { role: "user", parts: [{ text: message }] }
      ]
    };

    const response = await axios.post(url, requestBody);
    const aiResponse = response.data.candidates[0].content.parts[0].text;

    res.status(200).json({ success: true, response: aiResponse });

  } catch (error) {
    const status = error.response ? error.response.status : 500;
    console.error("❌ API ERROR:", status);

    // ✅ Handling the "Daily Quota Full" (429) for your demo
    if (status === 429) {
      return res.status(429).json({ 
        success: false, 
        message: "I'm taking a short break! (API Limit Reached). Please try again in a moment or use a new key." 
      });
    }

    res.status(status).json({ success: false, message: "Something went wrong with the AI connection." });
  }
};

module.exports = { getAIChatResponse };