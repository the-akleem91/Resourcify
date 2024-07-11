import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { CourseRouter } from './routes/courses.js';
import { UserRouter } from './routes/user.js';
import { ChapterRouter } from './routes/chapters.js';

// Initialize environment variables
dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/auth')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Define upload fields for courses and chapters
const courseUpload = upload.fields([{ name: 'thumbnail' }]);
const chapterUpload = upload.fields([{ name: 'notes' }, { name: 'video' }]);

app.use('/chapters', chapterUpload, ChapterRouter);

// Routes
app.use('/auth/courses', courseUpload, CourseRouter);

app.post('/auth/courses', (req, res) => {
  try {
    const { title, description, tags, chapters } = req.body;
    const thumbnail = req.files ? req.files.thumbnail[0].path : null;

    // Save course details to database or perform any required operations.
    console.log('Course details received:', { title, description, tags, chapters, thumbnail });
    res.status(200).send({ message: 'Course details saved successfully' });
  } catch (error) {
    console.error('Error saving course details:', error);
    res.status(500).send({ message: 'Error saving course details', error });
  }
});

app.post('/auth/signup', (req, res) => {
  // Implement your signup logic here
  const { username, email, password } = req.body;
  // Perform signup logic, e.g., save user to database
  console.log('Signup request received:', { username, email, password });
  res.status(201).json({ message: 'Signup successful' });
});

// Start server on a single port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
