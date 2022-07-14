const mongoose = require('mongoose');



  var Message = mongoose.model('Message', {
    adminName:{type:String},
    userName:{type:String},
    userEmail: {type:String},
    adminMessage:{type: Array},
    userMessage:{type: Array},
    messuser:{type:String},
    messadmin:{type:String},
    time:{type:Date},
});

  module.exports = {Message}
