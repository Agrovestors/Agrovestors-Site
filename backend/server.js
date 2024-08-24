const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import environment variables
const { PORT, MONGO_URL } = process.env;

const app = express();
const port = PORT || 5000;

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const topicsRouter = require('./routes/topics');
app.use('/api/topics', topicsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
