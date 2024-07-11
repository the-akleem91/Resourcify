import express from 'express';
import multer from 'multer';
import fs from 'fs';
import { Courses } from '../models/Courses.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = 'auth/courses/';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
        cb(new Error('Invalid file type'), false);
    } else {
        cb(null, true);
    }
};

const upload = multer({ 
    storage, 
    fileFilter 
});

router.post('/', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: 'No file uploaded' });
        }

        const { title, description, tags, chapters } = req.body;

        if (!title || !description) {
            return res.status(400).send({ message: 'Title and description are required' });
        }

        const newCourse = new Courses({
            title,
            description,
            file: req.file.path,
            tags: JSON.parse(tags || "[]"),
            chapters: JSON.parse(chapters || "[]"),
        });

        await newCourse.save();
        res.status(200).send({ message: 'Course details saved successfully' });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).send({ message: 'Internal server error', error: error.message });
    }
});

export { router as CourseRouter };
