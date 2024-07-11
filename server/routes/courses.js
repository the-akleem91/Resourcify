import express from 'express';
import multer from 'multer';
import { Course } from '../models/Courses.js';

const router = express.Router();
const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // File naming convention
    }
  });
  console.log("before upload");
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      // Add any specific file type checks if necessary
      console.log("in the program");
      if (file.mimetype.startsWith('image/')) {
        console.log("in the if");
        cb(null, true); // Accept the file
        console.log("in the if");
      } else {
        console.log("in the else");
        cb(new Error('File type not supported!'), false); // Reject the file
      }
    }
  });  

  console.log("after upload");

  app.post('/courses', upload.single('thumbnail'), (req, res) => {
    try {
      // Handle the uploaded file here
      console.log('File uploaded:', req.file);
      res.status(200).send('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Error uploading file');
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
