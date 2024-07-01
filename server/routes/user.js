import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
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
        });

        await newUser.save();
        return res.status(201).json({ status: true, message: "Record registered" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "user is not registered" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.json({ message: "password is incorrect" });
    }

    const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 });
    return res.json({ status: true, message: "login successfully" });
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
