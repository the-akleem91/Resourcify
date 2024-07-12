import express from 'express';
import multer from 'multer';
import { Course } from '../models/Courses.js';

const router = express.Router();
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/auth/courses", upload.single("image"), async (req, res) => {
  console.log("console req body",req.body);
  const imageName = req.file.filename;
  console.log(imageName);

  try {
    const temp = await Images.create({ thumbnail: imageName });
    console.log("console log temp",temp);
    res.status(200).json({ status: "ok" });
  } catch (error) {
    res.status(500).json({ status: error });
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).send(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).send({ message: 'Error fetching courses', error });
  }
});

// Get a course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send({ message: 'Course not found' });
    }
    res.status(200).send(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).send({ message: 'Error fetching course', error });
  }
});

// Update a course by ID
router.put('/:id', async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const thumbnail = req.files ? req.files.thumbnail[0].path : null;

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { title, description, thumbnail, tags },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).send({ message: 'Course not found' });
    }

    res.status(200).send(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).send({ message: 'Error updating course', error });
  }
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).send({ message: 'Course not found' });
    }

    res.status(200).send({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).send({ message: 'Error deleting course', error });
  }
});

export { router as CourseRouter };
