const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {
    Cart
} = require('../models/cart');

router.get('/carts', (req, res) => {
    Cart.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/carts/searchOfEmail', (req, res) => {
    const email = req.query.email;
    Cart.find({
        email: email
    }, function (err, response) {
        if (err)
            res.send(err);
        else
            res.send(response)
    })
});

router.post('/carts', (req, res) => {
    var cart = new Cart({
        email: req.body.email,
        product: req.body.product,
        quantity: req.body.quantity,
      


    });
    cart.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in cart Save :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/carts/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var cart = {
        email: req.body.email,
        product: req.body.product,
        quantity: req.body.quantity,
     


    };
    Cart.findByIdAndUpdate(req.params.id, {
        $set: cart
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/carts/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Cart.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Product Delete :' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;

