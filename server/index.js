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
import { Course } from './models/Courses.js';



// Initialize environment variables
dotenv.config();

// Create express app
const app = express();

// Middleware

app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
const uri = process.env.MONGODB_URL;

mongoose.connect(uri, {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  }
}).then(() => {
  console.log("Successfully connected to MongoDB Atlas!");
}).catch((error) => {
  console.error("Connection error", error);
});

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
const avatarUpload = upload.single('avatar');
const courseUpload = upload.fields([{ name: 'thumbnail' }]);
const chapterUpload = upload.fields([{ name: 'notes' }, { name: 'video' }]);

app.use('/auth/courses', courseUpload, CourseRouter);
app.use('/chapters', chapterUpload, ChapterRouter);
app.use('/auth', UserRouter);
app.use('/auth/*', UserRouter);
// Routes
app.post('/auth/courses', async (req, res) => {
  try {
    console.log('Received a request to /auth/courses');
    console.log('Request body:', req.body);
    console.log('Request files:', req.files);

    const { title, description, tags, chapters } = req.body;
    const thumbnail = req.files ? req.files.thumbnail[0].path : null;

    // Validate required fields
    if (!title || !description) {
      console.log('Validation error: Title and description are required');
      return res.status(400).send({ message: 'Title and description are required' });
    }

    // Create a new course instance
    const newCourse = new Course({ 
      title, 
      description, 
      tags: JSON.parse(tags), 
      chapters: JSON.parse(chapters), 
      thumbnail 
    });

    // Save the course to the database
    await newCourse.save();

    console.log('Course details saved:', { title, description, tags, chapters, thumbnail });
    res.status(200).send({ message: 'Course details saved successfully' });
  } catch (error) {
    console.error('Error saving course details:', error);
    res.status(500).send({ message: 'Error saving course details', error });
  }
});

// app.post('/auth/signup', (req, res) => {
//   // Implement your signup logic here
//   const { username, email, password } = req.body;
//   // Perform signup logic, e.g., save user to database
//   console.log('Signup request received:', { username, email, password });
//   res.status(201).json({ message: 'Signup successful' });
// });

// app.post('/auth/login', (req, res) => {
//   // Implement your signup logic here
//   const { email, password } = req.body;
//   // Perform signup logic, e.g., save user to database
//   console.log('login request received:', { email, password });
//   res.status(201).json({ message: 'login successful' });
// });

// Start server on a single port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
