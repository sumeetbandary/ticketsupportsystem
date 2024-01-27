import mongoose from 'mongoose';
import User from '../models/user.model.js'; // Make sure to provide the correct path to your userModel file

const signup = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, password, role } = req.body;

        // Check if the user with the given email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Create a new user
        const newUser = new User({
            username,
            email,
            password, // You might want to hash the password before saving it in a real-world scenario
            role,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const login = async (req, res) => {
    try {
        // Implement your login logic here
        // You might want to check the provided credentials against the stored user data
        // and generate a token if the credentials are valid

        res.send('Login logic will be implemented here');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { signup, login };
