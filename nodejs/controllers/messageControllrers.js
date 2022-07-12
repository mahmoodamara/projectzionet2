const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Message} = require('../models/message');

router.get('/messages', (req, res) => {
  Message.distinct("userName",{},(err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/messagesUsers', (req, res) => {
  Message.find().sort({ time: -1 }).exec(function(err, docs) {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
  });
});



router.get('/messages/userEmail', (req, res) => {
  const userEmail = req.query.userEmail;
  Message.find({
    userEmail: userEmail
  }, function (err, response) {
    if (err)
      res.send(err);
    else
      res.send(response)
  })
});


router.get('/messages/userName', (req, res) => {
  const userName = req.query.userName;
  Message.find({
    userName: userName
  }, function (err, response) {
    if (err)
      res.send(err);
    else
      res.send(response)
  })
});

var date = new Date();
router.post('/messages', (req, res) => {
  var product = new Message({
    adminName: "admin",
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    adminMessage: req.body.adminMessage,
    userMessage : req.body.userMessage,
    time : date

  });
  product.save((err, doc) => {
      if (!err) {
          res.send(doc);
      } else {
          console.log('Error in product Save :' + JSON.stringify(err, undefined, 2));
      }
  });
});

module.exports = router;
