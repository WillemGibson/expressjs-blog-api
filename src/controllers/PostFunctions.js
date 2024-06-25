const { Post } = require('../models/PostModel');

// Model.find({}) returns all documents in the 'posts' collection.
async function getAllPosts() {
    // Retrieve all posts from the database.
    return await Post.find({}).exec();
}

async function getPostById(postID) {
    // Retrieve a post by its unique ID.
    return await Post.findById(postID).exec();
}

async function getPostByAuthor(userID) {
    // Retrieve all posts authored by a specific user.
    return await Post.find({ author: userID }).exec();
}

async function createPost(postDetails) {
    // Create a new post using the provided postDetails.
    return await Post.create(postDetails);
}

async function updatePost(postDetails) {
    // Find a post by ID, update it with new data, and return the updated post.
    return await Post.findByIdAndUpdate(postDetails.postID, postDetails.updatedData, { returnDocument: 'after' }).exec();
}

async function deletePost(postID) {
    // Find a post by ID and delete it from the database.
    return await Post.findByIdAndDelete(postID).exec();
}

module.exports = {
    getAllPosts, getPostById, getPostByAuthor, createPost, updatePost, deletePost
}