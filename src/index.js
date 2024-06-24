// Import the configured items from the server file:
var { app, HOST, PORT } = require('./server');

// Rung the server
app.listen(PORT, HOST, () => {
    console.log(`
    Express Blog API is now Running!
    
    Congrats!
    `);
});