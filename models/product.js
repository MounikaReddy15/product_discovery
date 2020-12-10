
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Catergory'
    }],
},
{
   timestamps: true
})

// before exporting we need to tell, its a model in the db
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

