const mongoose = require('mongoose');

var Cart = mongoose.model('Cart', {
    email: { type: String },
    product: { type: Object },
    quantity: { type: Number },
 

});

module.exports = { Cart };
