const express = require('express');
const { ConsoleReporter } = require('jasmine');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Message} = require('../models/message');

router.get('/messages', (req, res) => {
  Message.find("userName",{},(err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.route('/countMessages').get(function (req, res) {
  Message.count({}, function (err, result) {
      if (err) {
          res.send(err)
      } else {
          res.json(result)
      }
  })
})


router.get('/messagesUsers', (req, res) => {
  Message.find().sort({ userMessage : -1 }).exec(function(err, docs) {
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
  Message.find({userName: userName}).sort({ userMessage: -1 }).exec(function (err, response) {
    if (err)
      res.send(err);
    else
      res.send(response)
  })
});

var date = new Date();
router.post('/messagesUser', async (req, res) => {
  const user = await Message.findOne({userEmail: req.body.userEmail});

      if(!user){
        var mess = {
          time : date,
          messuser : req.body.messuser,
          messadmin:""
        };
        var message = new Message({
          adminName: "admin",
          userName: req.body.userName,
          userEmail: req.body.userEmail,
          userMessage : mess,
          time:date
        });
        message.save((err, doc) => {
            if (!err) {
                res.send(doc);
            } else {
                console.log('Error in product Save :' + JSON.stringify(err, undefined, 2));
            }
        });
      }else{
        var mess = {
          time : date,
          messuser : req.body.messuser,
          messadmin:""
        };
        Message.updateOne({userEmail:req.body.userEmail},{$push: {userMessage : mess}},(err, doc) => {
          if (!err) {
            res.send(doc);
          } else {
            console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2));
          }
        });
      }
      });




      router.post('/messagesAdmin', async (req, res) => {
        const user = await Message.findOne({userEmail: req.body.userEmail});

            if(!user){
              var mess = {
                time : date,
                messadmin : req.body.messadmin,
                messuser : "",

              };
              var message = new Message({
                adminName: "admin",
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                userMessage: mess,
              });
              message.save((err, doc) => {
                  if (!err) {
                      res.send(doc);
                  } else {
                      console.log('Error in product Save :' + JSON.stringify(err, undefined, 2));
                  }
              });
            }else{
              var mess = {
                time : date,
                messadmin : req.body.messadmin,
                messuser : "",

              };


              Message.updateOne({userEmail:req.body.userEmail},{
                $push: {userMessage : mess}
              },  (err, doc) => {
                if (!err) {
                  res.send(doc);
                } else {
                  console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2));
                }
              });
            }
            });




module.exports = router;
