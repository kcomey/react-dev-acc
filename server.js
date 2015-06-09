'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = require('./router.js');
var resourceName = 'notes';

router(app, resourceName);

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});
