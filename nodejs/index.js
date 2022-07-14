const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db');
PORT=3000;
var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


var userControllers = require('./controllers/userControllers');
var productControllers = require('./controllers/productControllers');
var messageControllers = require('./controllers/messageControllrers');
var cartControllers = require('./controllers/cartControllers');




app.listen(PORT, () => console.log('Server started at port : '+PORT));

app.use('/api', userControllers);
app.use('/api', productControllers);
app.use('/api', messageControllers);
app.use('/api', cartControllers);

