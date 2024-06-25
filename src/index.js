// Import the configured items from the server file:
var { app, PORT } = require('./server');

// Run the server
app.listen(PORT, () => {
    console.log(`
    Express Blog API is now Running!
    
    Congrats!
    `);
});