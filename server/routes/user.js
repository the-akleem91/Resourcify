import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer configuration for storing uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Endpoint for uploading avatar
router.post('/users/upload-avatar', upload.single('avatar'), async (req, res) => {
    try {
      console.log('Uploading avatar for user');
      
      // Debugging statement to inspect request body
      console.log('Request body:', JSON.stringify(req.body));
      console.log('Request file:', req.file);
      
      const { username } = req.body;
      
      // Validate the username field
      if (!username || typeof username !== 'string') {
        return res.status(400).json({ message: 'Invalid username' });
      }
      
      const avatarUrl = `/uploads/${req.file.filename}`;
      
      // Find user by username
      const user = await User.findOne({ username });
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Update user's avatar URL
      user.avatarUrl = avatarUrl;
      await user.save();
      
      res.json({ avatarUrl: user.avatarUrl });
    } catch (error) {
      console.error('Error updating avatar:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.post('/', async (req, res) => {
    try {
        console.log("oh i think i am at wrong place");
        const { username, email, password , role} = req.body;

        if (!username || !email || !password || !role) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "User already exists with this username" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();
        return res.status(201).json({ status: true, message: "Record registered" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/user/:userId', async (req, res) => {
    try {
        const username = req.params.userId;
        console.log(`Fetching details for user with username: ${username}`);
        
        // Use an object as the filter parameter for findOne
        const user = await User.findOne({ username: username });
        
        if (user) {
            console.log("i have send data to frontend");
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});




router.post('/login', async (req, res) => {
    try {
        console.log('Login attempt');

        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User is not registered" });
        }

        // Validate password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.KEY, 
            { expiresIn: '1h' }
        );

        // Set cookie
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

        // Respond with success message
        return res.json({ status: true, message: "Login successful" });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/forgotpassword', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not registered" });
        }

        // Generate a token
        const token = crypto.randomBytes(20).toString('hex');

        // Save the token and its expiration to the user's record
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'resourcifycourses@gmail.com',
                pass: 'qqpk yfbb owhe atux'
            }
        });

        // Email options
        const mailOptions = {
            from: 'resourcifycourses@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: `Click the following link to reset your password: http://localhost:5173/resetpassword/${token}`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: "Failed to send email" });
            } else {
                return res.status(200).json({ status: true, message: "Email sent" });
            }
        });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    console.log("Reset password request received");
    console.log("Token:", token);
    console.log("Password:", password);

    try {
        if (!password) {
            console.log("Password is missing");
            return res.status(400).json({ message: "Password is required" });
        }

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            console.log("Invalid or expired token");
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        console.log("User found:", user.email);

        const hashPassword = await bcrypt.hash(password, 10);
        user.password = hashPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();
        console.log("Password updated successfully");
        return res.json({ status: true, message: "Password updated successfully" });
    } catch (err) {
        console.error('Error during password reset:', err);
        return res.status(500).json({ message: "Server error" });
    }
});

export { router as UserRouter };
