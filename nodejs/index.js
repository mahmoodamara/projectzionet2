const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db');
PORT=3000;
var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


var userControllers = require('./controllers/userControllers');


app.listen(PORT, () => console.log('Server started at port : '+PORT));

app.use('/api', userControllers);
