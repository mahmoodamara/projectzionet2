const mongoose = require('mongoose');



  var Message = mongoose.model('Message', {
    adminName:{type:String},
    userName:{type:String},
    userEmail: {type:String},
    adminMessage:{type: String},
    userMessage:{type: String},
    time:{type:Date},
});

  module.exports = {Message}
