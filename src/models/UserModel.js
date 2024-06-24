// Import mongoose module for MongoDB interaction
const mongoose = require("mongoose");

// Define a Mongoose Schema for the User collection
const UserSchema = new mongoose.Schema({
    email: String,                                      // Field for user's email address (type: String)
    password: String,                                   // Field for user's password (type: String)
    username: String,                                   // Field for user's username (type: String)
    country: String,                                    // Field for user's country (type: String)
    role: { type: mongoose.Types.ObjectId, ref: 'Role' } // Field for user's role, referencing the 'Role' collection
});

// Create a Mongoose model based on the UserSchema
const User = mongoose.model('User', UserSchema);

// Export the User model to be used in other parts of the application
module.exports = { User };