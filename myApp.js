let express = require('express');
let app = express();



console.log("Hello World")


// Starting Express Server
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })


// Serving Middleware to our Express
app.use(express.static(__dirname + '/public'))

// serving HTML files
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
})






























 module.exports = app;
