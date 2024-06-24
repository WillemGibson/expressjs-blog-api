// Import mongoose module for MongoDB interaction
const mongoose = require('mongoose');

// Define a Mongoose Schema for the Role collection
const RoleSchema = new mongoose.Schema({
    name: String,           // Field for role name (type: String)
    description: String     // Field for role description (type: String)
});

// Create a Mongoose model based on the RoleSchema
const Role = mongoose.model('Role', RoleSchema);

// Export the Role model to be used in other parts of the application
module.exports = { Role };