const User = require("../models/user"); // Import your User model
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
    console.log("CREATING USER");
    const {
        firstname,
        lastname,
        email,
        pwd,
        gender,
        age,
        marriageStatus,
        ethnicity,
        occupation,
        pronoun,
        questions_index,
    } = req.body; // In a real app, you might want to pick only the fields you expect

    try {
        // Check if the user with the given email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res
                .status(400)
                .json({ error: "User with this email already exists" });
        }

        // Create a new user instance
        const newUser = new User({
            firstname,
            lastname,
            email,
            pwd,
            gender,
            age,
            marriageStatus,
            ethnicity,
            occupation,
            pronoun,
            questions_index,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Respond with the newly created user
        res.json(savedUser);
    } catch (error) {
        // Handle error
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getUser = async (req, res) => {
    // Logic to get a user goes here
    const userId = req.params.id;
    console.log("GETTING A USER: ", userId);

    try {
        // Fetch the user from the database by ID
        const fetchedUser = await User.findById(userId);

        if (!fetchedUser) {
            // If user not found
            return res.status(404).json({ error: "User not found" });
        }

        // Respond with the fetched user
        res.json(fetchedUser);
    } catch (error) {
        // Handle error
        console.error(`Error fetching user ${userId}:`, error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateUser = async (req, res) => {
    // Logic to update a user goes here
    const userId = req.params.id;
    // Only pick fields that are allowed to be updated
    const updateData = req.body;

    console.log("UPDATING USER: ", userId);

    try {
        // Use findByIdAndUpdate for an atomic operation
        // { new: true } returns the updated document
        const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateData }, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Respond with the updated user
        res.json(updatedUser);
    } catch (error) {
        // Handle error
        console.error(`Error updating user ${userId}:`, error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllUsers = async (req, res) => {
    console.log("GETTING ALL USERS");
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const loginUser = async (req, res) => {
    console.log("USER LOGIN");

    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.pwd);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Create a JWT token for authentication
        // Using the user ID as a token is not secure. Use JWT.
        // const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
        const token = user._id;

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    createUser: createUser,
    updateUser: updateUser,
    getUser: getUser,
    getAllUsers: getAllUsers,
    loginUser: loginUser,
};
