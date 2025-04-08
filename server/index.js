// Import necessary modules
import express from "express";  // Express framework for creating the backend server
import mongoose from "mongoose"; // Mongoose for interacting with MongoDB
import dotenv from "dotenv";  // dotenv for loading environment variables
import cors from "cors";  // cors middleware to allow cross-origin requests

// Import route handlers
import bookRoute from './routes/book.route.js';  // Book-related API routes
import userRoute from './routes/user.route.js';  // User-related API routes

// Initialize Express app
const app = express();

// Enable CORS to allow requests from different origins (e.g., frontend)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

// Set the port number from the environment variable or use 4000 by default
const PORT = process.env.PORT || 4000;

// Get MongoDB connection URI from environment variables
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
    mongoose.connect(URI, {});  // Establish connection to MongoDB
    console.log("Connected to MongoDB");  // Log successful connection
} catch (error) {
    console.log("Error:", error);  // Log any connection errors
}

// Define API routes
app.use("/book", bookRoute); // All requests starting with "/book" will be handled by bookRoute
app.use("/user", userRoute); // All requests starting with "/user" will be handled by userRoute

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);  // Log the server startup
});
