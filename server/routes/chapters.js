import express from 'express';
import { Chapters } from '../models/Chapters.js';

const router = express.Router();

// Create a new course
router.post('/', async (req, res) => {
  try {
      const { title, description, tags } = req.body;
      const notes = req.files?.notes ? req.files.notes[0].path : null;
      const video = req.files?.video ? req.files.video[0].path : null;

      const newCourse = new Chapters({ title, description, tags, notes, video });
      await newCourse.save();

      res.status(201).json(newCourse);
  } catch (err) {
      console.error('Error creating course:', err);  // Log the error
      res.status(500).json({ error: err.message });
  }
});



// Fetch all chapters
router.get('/', async (req, res) => {
  try {
    const chapters  = await Chapters.find();
    res.status(200).json(chapters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
  try {
    await Chapters.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export { router as ChapterRouter };
