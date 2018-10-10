const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const controller = require('./controllers/index');
const mongoose = require('mongoose');
const port = process.env.PORT || 3030;

mongoose.connect('mongodb://roots:roots123@ds225543.mlab.com:25543/roots');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongodb is connected');
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(controller);



app.listen(port,()=> console.log(`app listening to port ${port}`));