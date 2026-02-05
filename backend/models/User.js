const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6
  },
  // Fitness Profile (Optional initially, user can update later)
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  height: {
    type: Number, // in cm
  },
  weight: {
    type: Number, // in kg
  },
  goal: {
    type: String, // e.g., 'Weight Loss', 'Muscle Gain'
    default: 'General Fitness'
  },
  dietPlan: [
    {
      time: String,
      meal: String,
      cal: String
    }
  ],
  savedWorkouts: [
    {
        exerciseName: String,
        category: String,
        video: String,
        path: String, // <--- YE FIELD HONI CHAHIYE
    }
],
  role: {
    type: String,
    enum: ['user', 'trainer', 'admin'], // 'trainer' add kiya gaya hai
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);