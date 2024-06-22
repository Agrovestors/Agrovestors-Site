const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

// Create a new topic
router.post('/', async (req, res) => {
  const { title, body } = req.body;
  const newTopic = new Topic({ title, body });

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

module.exports = router;
