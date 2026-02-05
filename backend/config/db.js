const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB connection string .env file se lenge
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected Successfully ✅');
  } catch (error) {
    console.error('MongoDB Connection Failed ❌', error);
    process.exit(1); // Failure hone par process band kar do
  }
};

module.exports = connectDB;