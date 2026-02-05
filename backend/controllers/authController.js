const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Register new user/trainer
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = async (req, res) => {
  try {
    // 1. Request body se saari fields nikaali (Destructuring)
    const { 
      name, 
      email, 
      password, 
      age, 
      height, 
      weight, 
      goal, 
      gender, 
      role 
    } = req.body;

    // 2. Basic Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please add all required fields' });
    }

    // 3. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 4. Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Create User/Trainer in Database
    // Role default 'user' rahega agar frontend se nahi aaya
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
      height,
      weight,
      goal: goal || 'General Fitness',
      role: role || 'user' 
    });

    // 6. Response with User Data and Token
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role, // Dashboard redirect ke liye zaroori hai
        age: user.age,
        height: user.height,
        weight: user.weight,
        goal: user.goal,
        gender: user.gender,
        token: generateToken(user._id)
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }

  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// --- YE FUNCTION ZAROORI HAI ---
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret123', {
    expiresIn: '30d',
  });
};

// @desc    Authenticate a user & get token
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
  
  try {
    const { email, password } = req.body;

    // 1. Check karo email aur password bheja hai ya nahi
    if (!email || !password) {
      return res.status(400).json({ message: 'Please add email and password' });
    }

    // 2. User ko dhoondo (Database se role aur baaki fields nikaalne ke liye)
    const user = await User.findOne({ email });

    // 3. Password match karo (Bcrypt use karke)
    if (user && (await bcrypt.compare(password, user.password))) {
      // 4. Response mein saari zaroori fields bhejein
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,       // <--- Redirect logic ke liye sabse zaroori
        age: user.age,         // User dashboard ke liye
        goal: user.goal,       // User dashboard ke liye
        weight: user.weight,   // User dashboard ke liye
        height: user.height,   // User dashboard ke liye
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update User Diet Plan
// @route   PUT /api/auth/update-diet
// @access  Private
exports.updateDiet = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Protect middleware se id milegi

    if (user) {
      user.dietPlan = req.body.dietData; // Frontend se bheja gaya array
      const updatedUser = await user.save();
      
      res.json({
        message: "Diet updated successfully!",
        dietPlan: updatedUser.dietPlan
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// 1. Get Current User Data (Dashboard ke liye)
exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// 2. Remove Workout Logic
exports.removeWorkout = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user) {
            // ID match karke delete karna
            user.savedWorkouts = user.savedWorkouts.filter(
                (workout) => workout._id.toString() !== req.params.id
            );
            await user.save();
            res.json({ message: "Workout removed", savedWorkouts: user.savedWorkouts });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// 3. Save Workout Logic (Path ke saath)
exports.saveWorkout = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user) {
            // Frontend se aayi saari details (name, category, video, path) push karein
            user.savedWorkouts.push(req.body); 
            await user.save();
            res.json({ message: "Workout Saved" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};