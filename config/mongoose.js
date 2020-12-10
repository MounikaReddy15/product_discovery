

// ODM
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_discovery',{ useUnifiedTopology: true,  useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to Mongodb'));

// when connection is open
db.once('open', function() {
    console.log('Connected to db :: mongodb');

});

module.exports = db;