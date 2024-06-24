// Require mongoose module for MongoDB interaction
const mongoose = require('mongoose');

// Function to connect to the database
async function databaseConnector(databaseURL) {
    await mongoose.connect(databaseURL);
}

// Function to disconnect from the database
async function databaseDisconnector() {
    await mongoose.connection.close();
}

// Exporting functions to be used by other modules
module.exports = {
    databaseConnector,
    databaseDisconnector
}
