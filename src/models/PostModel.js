// Import mongoose module for MongoDB interaction
const mongoose = require("mongoose");

// Define a Mongoose Schema for the Post collection
const PostSchema = new mongoose.Schema({
    title: String,                                      // Field for post title (type: String)
    content: String,                                    // Field for post content (type: String)
    author: { type: mongoose.Types.ObjectId, ref: 'User' } // Field for post author, referencing the 'User' collection
});

// Create a Mongoose model based on the PostSchema
const Post = mongoose.model('Post', PostSchema);

// Export the Post model to be used in other parts of the application
module.exports = { Post };