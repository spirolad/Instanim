const express = require('express');
const mongoose = require('mongoose');
const upload = require('express-fileupload');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(upload());
app.use(express.static('public'));

// Init server and database
fs.readFile('./privacy/conf.json', 'utf8', function(err, data) {
    if(err){
        console.error(err);
        return;
    }
    var conf = JSON.parse(data);
    var databaseId = conf.nosql;
    var dbURI = 'mongodb://'+ nosql.username +':'+ nosql.password +'@'+ databaseId.address +'/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0';
    mongoose.connect(dbURI)
        .then((result) => {
            app.listen(80);
            console.log('Server start listening on port 80');
        })
        .catch((err) => {
            console.error(err);
        });
});
