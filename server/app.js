const path = require('path');
const express = require("express");
const bodyParser = require('body-parser')

const app = express();

//serve up static pages with max-age headers of 1 day
app.use(express.static(path.join(__dirname, '../build'), { maxAge: 86400000 }));

//body parsing middleware (for json, urlencoded, and multipart responses)
app.use(bodyParser());

//handle any errors
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke!');
});

// Render the app
app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname, '../build/index.html'));
});

//start server
const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});