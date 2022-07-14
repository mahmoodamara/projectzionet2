const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {
  Product
} = require('../models/product');

router.get('/products', (req, res) => {
  Product.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2));
    }
  });
});


router.get('/products/:category', (req, res) => {
  Product.find({category:req.params.category}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2));
    }
  });
});



router.route('/countProducts').get(function (req, res) {
  Product.count({}, function (err, result) {
      if (err) {
          res.send(err)
      } else {
          res.json(result)
      }
  })
})


router.post('/products', (req, res) => {
  var product = new Product({
    serialNumber: req.body.serialNumber,
    img: req.body.img,
    category: req.body.category,
    price: req.body.price,
    name: req.body.name,
    description: req.body.description,
    quantity:req.body.quantity,
    sales:req.body.sales



  });
  product.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in product Save :' + JSON.stringify(err, undefined, 2));
    }
  });
});


router.put('/products/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var product = {
    serialNumber: req.body.serialNumber,
    img: req.body.img,
    category: req.body.category,
    price: req.body.price,
    name: req.body.name,
    description: req.body.description,
    quantity:req.body.quantity,
    sales:req.body.sales

  };
  Product.findByIdAndUpdate(req.params.id, {$set: product}, {new: true}, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2));
    }
  });
});

router.delete('/products/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Product.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Product Delete :' + JSON.stringify(err, undefined, 2));
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

router.get('/productsSales', (req, res) => {
  Product.find().sort({
      sales: -1
  }).limit(5).exec(function (err, docs) {
      if (!err) {
          res.send(docs);
      } else {
          console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2));
      }
  });
});

router.get('/cheapestBooks', (req, res) => {
  Product.find().sort({
      price: 1
  }).limit(5).exec(function (err, docs) {
      if (!err) {
          res.send(docs);
      } else {
          console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2));
      }
  });
});



module.exports = router;
