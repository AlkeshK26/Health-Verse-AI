const axios = require('axios');

exports.generateAIPlan = async (req, res) => {
  try {
    // ✅ STEP 1: Using environment variable for security
    const API_KEY = process.env.GEMINI_API_KEY; 

    // Destructuring all necessary fields from request body
    const { 
      age, weight, height, gender, goal, activityLevel, 
      dietaryPreference, workoutLocation, healthCondition 
    } = req.body;

    // ⚠️ Note: Ensuring model name matches your provided list
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const requestBody = {
      contents: [{
        parts: [{
          text: `Act as a Senior Elite Health & Performance Coach for HealthVerse AI. 
                 Tone: Professional, Motivating, and Interactive.
                 Visual Style: Use emojis (💪, 🥗, 🗓️, 🧘, 🚀) frequently. Use bold headings and bulleted lists for high readability.

                 USER PROFILE:
                 - Personal: ${age} years, ${gender}, ${height}cm, ${weight}kg
                 - Goal: ${goal} (Priority: Visible Abs transformation in 60 days)
                 - Lifestyle: ${activityLevel}, Location: ${workoutLocation}
                 - Constraints: ${dietaryPreference} Diet, Health Note: ${healthCondition}

                 PLEASE GENERATE THE REPORT IN THIS EXACT LIST FORMAT:

                 1. 🥗 MANDATORY NUTRITIONAL PIVOTS
                    - Provide exactly 3 high-impact dietary changes in a bulleted list.
                    - Provide a detailed Macro-calculation Table (Calories, Protein, Carbs, Fats) specifically for a 'Cutting' phase.

                 2. 🗓️ 8-WEEK PROGRESSIVE TRAINING ARCHITECTURE
                    Break this down into three phases using Markdown Tables:
                    - PHASE A: Week 1-2 (Adaptation)
                    - PHASE B: Week 3-5 (Intensity & Overload)
                    - PHASE C: Week 6-8 (Peak Definition)
                    
                    For EACH phase, include specific exercises for:
                    - 💪 GYM (Compound movements)
                    - 🏠 HOME (HIIT & Core Stability)
                    - 🧘 YOGA/MEDITATION (Recovery & Mental Focus)

                 3. 🚀 WEEKLY MILESTONES (THE ROADMAP)
                    - List Week 1 through Week 8 as an interactive-style list.
                    - For each week, mention exactly what the user will FEEL (energy/soreness) and SEE (physical changes).

                 4. 💡 ELITE COACH TIPS
                    - Add 3 short, punchy tips on Sleep, Hydration, and Mind-Muscle connection.

                 Format Requirement: Strictly use Markdown. Use Emojis to start every major section and list item.`
        }]
      }]
    };

    console.log("🚀 Requesting Gemini AI (Securely)...");

    const response = await axios.post(url, requestBody, {
      headers: { 'Content-Type': 'application/json' }
    });

    const aiText = response.data.candidates[0].content.parts[0].text;

    console.log("✅ FitPlanHub AI Success with Gemini API!");
    res.status(200).json({ success: true, plan: aiText });

  } catch (error) {
    console.error("❌ ERROR DETAILS:", error.response ? error.response.data : error.message);
    res.status(500).json({ 
      success: false, 
      message: "Server Error during Plan Generation", 
      error: error.response ? error.response.data.error.message : error.message 
    });
  }
};