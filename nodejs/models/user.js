const mongoose = require('mongoose');



  var User = mongoose.model('User', {
    username:{type:String,unique:true},
    email: {type:String , unique:true},
    password:{type: String},
    phone: {type:String,unique:true},
});

  module.exports = {User}
