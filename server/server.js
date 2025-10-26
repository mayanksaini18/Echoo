const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

dotenv.config();
const PORT = process.env.PORT || 3001;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
 
// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
 
// Routes
app.use(userRoutes);
 
const startServer = async () => {
  try {
    if (!MONGO_CONNECTION) {
      console.error("MongoDB connection string not found in environment variables.");
      process.exit(1);
    }
    await mongoose.connect(MONGO_CONNECTION);
    console.log("Connected to MongoDB");
 
    app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
  } catch (error) {
    console.error("Could not connect to MongoDB");
    console.error(error);
    process.exit(1);
  }
};
 
startServer();
