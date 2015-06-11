'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongo = require('mongo');
var mongojs = require('mongojs');
var db = mongojs('notesdb', ['notes']);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/notes', function(req, res) {
  db.notes.find(function(err, docs) {
    console.log(docs);
    res.json(docs);
  })

app.post('/api/notes', function(req, res) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  console.log('am I getting to post call?');
  console.log(req.body);
  db.notes.insert(req.body, function(err, docs) {
    res.json(docs);
  });
});

app.delete('/api/notes/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.notes.remove({_id: mongojs.ObjectId(id)}, function(err, docs) {
    res.json(docs);
  });
});

});

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});
