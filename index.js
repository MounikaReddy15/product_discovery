
const express = require('express');
const app = express();

// to connect to database
const db = require("./config/mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for defining assets
const path = require('path');

const port = process.env.PORT || 9000;

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//folder for static files
app.use(express.static(path.join(__dirname, 'assets')));

//we need to tell the app to use the exported router
app.use('/', require('./routes'));

//to make the app listen
app.listen(port, function(err){
    if(err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
