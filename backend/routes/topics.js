// routes/topics.js
const express = require('express');
const multer = require('multer');
const Topic = require('../models/Topic');
const router = express.Router();

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Create a new topic with image upload
router.post('/', upload.single('image'), async (req, res) => {
  const { title, body } = req.body;
  const newTopic = new Topic({
    title,
    body,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : '',
  });

  try {
    const savedTopic = await newTopic.save();
    res.json(savedTopic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a topic by ID
router.get('/:id', async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) return res.status(404).json({ message: 'Topic not found' });
    res.json(topic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
