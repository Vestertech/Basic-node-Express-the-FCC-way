let express = require('express');
let app = express();



console.log("Hello World")


// Starting Express Server
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })

// serving HTML files
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
})

// Serving Middleware to our Express
const lett = app.use(express.static(__dirname + '/public'))































 module.exports = app;
