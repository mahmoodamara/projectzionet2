const mongoose = require('mongoose');



  var Product = mongoose.model('Product', {
    serialNumber:{type:Number},
    name:{type:String},
    img: {type:String},
    category:{type: String},
    price:{type: Number},
    description:{type: String},
    quantity:{type:Number},
    sales:{type:Number}

});

  module.exports = {Product}
