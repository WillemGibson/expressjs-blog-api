const mongoose = require('mongoose');
const { databaseConnector } = require('./database');
const { hashString } = require('./controllers/UserFunctions');

// Import the models that we'll seed, so that
// we can do things like Role.insertMany()
const { Role } = require('./models/RoleModel');
const { User } = require('./models/UserModel');
const { Post } = require('./models/PostModel');

// Make sure this file can read enviroment variables.
const dotenv = require('dotenv');
dotenv.config();

// Create some raw data for the Roles collection,
// obeying the needed fields fromt he Role schema.
const roles = [
    {
        name: "regular",
        description:"A regular user can view, create and read data. They can edit and delete only their own data."
    },
    {
        name: "admin",
        description:"An admin user has full access and permissions to do anything and everything within this API."
    },
    {
        name:"banned",
        description:"A banned user can read data, but cannot do anything else."
    }
]

// To fill in after creating user data encryption functionality.
const users = [
    {
        username: "seedUser1",
        email:"seed1@email.com",
        password: null,
        country:"Australia",
        role: null
    },
    {
        username: "seedUser2",
        email:"seed2@email.com",
        password: null,
        country:"TheBestOne",
        role: null
    }
];

// To fill in after creating users successfully.
const posts = [
    {
        title: "Some seeded post",
        description: "Very cool. Best post. Huge post. No other posts like it!",
        author: null
    },
    {
        title: "Some other seeded post",
        description: "Very cool. Best post. Huge post. One other post like it!",
        author: null
    },
    {
        title: "Another seeded post",
        description: "Very cool. Best post. Huge post. Two other posts like it!",
        author: null
    }
];

// Connect to database.
var databaseURL = "";
switch (process.env.NODE_ENV.toLowerCase()) {
    case "test":
        databaseURL = "mongodb://localhost:27017/ExpressBuildAnAPI-test";
        break;
    case "development":
        databaseURL = "mongodb://localhost:27017/ExpressBuildAnAPI-dev";
        break;
    case "production":
        databaseURL = process.env.DATABASE_URL;
        break;
    default:
        console.error("Incorrect JS environment specified, database will not be connected.");
        break;
}

// This funcitonality is a big promise-then chain.
// This is because it requires some async functionality,
// and that doesn't work without being wrapped in a function.
// Since .then(callback) lets us create function as callbacks,
// we can just do stuff in a nice .then chain.
databaseConnector(databaseURL).then(() => {
    console.log("Databaser connected succfessully!");
}).catch(error => {
    console.log(`
    Some error occurred connecting to the database! It was: 
    ${error}
    `);
}).then(async () => {
    if (process.env.WIPE == "true") {
        // Get the names of all collections in the DB.
        const collections = await mongoose.connection.db.listCollections().toArray();

        // Empty the data and collections from the DB so that they no longer exist.
        collections.map((collection) => collection.name)
        .forEach(async (collectionName) => {
            mongoose.connection.db.dropCollection(collectionName);
        });
        console.log("Old DB data deleted.");
    }
}).then(async () => {
    // Add new data into the database.
    await Role.insertMany(roles);

    console.log("New DB data created.");
}).then(() => {
    // Disconnect from the database.
    mongoose.connection.close();
    console.log("DB seed connection closed.")
});