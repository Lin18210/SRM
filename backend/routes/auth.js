import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db';

const router = express.Router();

// Cookie options for setting JWT in cookies
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'Strict',
    maxAge: 30 * 24 * 60 * 60 * 1000 // cookies will expire in 30 days (if my math is correct lol) 
};

// Function to generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}

//Register User

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email ||!password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
    }
});