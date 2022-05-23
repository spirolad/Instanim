const express = require('express');
const mongoose = require('mongoose');
const upload = require('express-fileupload');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(upload());
app.use(express.static('public'));

// Init server and database
fs.readFile('', 'utf8', function(err, data) {
    if(err){
        console.error(err);
        return;
    }
    var dbURI = data;
    mongoose.connect(dbURI)
        .then((result) => {
            app.listen(80);
            console.log('Server start listening on port 80');
        })
        .catch((err) => {
            console.error(err);
        });
});
