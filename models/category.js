
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true,
    },
},
{
   timestamps: true
})

// before exporting we need to tell, its a model in the db
const Catergory = mongoose.model('Catergory', categorySchema);

module.exports = Catergory;

