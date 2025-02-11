// backend/controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let users = [
    { username: 'admin', password: 'password' } // password is 'password'
];

// Login route
export const login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare password with hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate JWT Token
        const token = jwt.sign({ username: user.username }, 'yourSecretKey', { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    });
};
