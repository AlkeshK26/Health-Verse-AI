const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Routes Import
const authRoutes = require('./routes/authRoutes');
const aiRoutes = require('./routes/aiRoutes'); // ✅ Import AI Routes

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// ✅ Routes Register
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);  // <--- YE LINE ZAROORI HAI
const visionRoutes = require('./routes/visionRoutes');

// Add this with your other routes
app.use('/api/vision', visionRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});