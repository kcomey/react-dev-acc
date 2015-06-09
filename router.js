var mongo = require('mongo');
var mongojs = require('mongojs');

module.exports = function(app, resource) {
  //var Model = mongo(resource, 'localhost', '27017');

  app.get('/', function(req, res) {
    // Show list of resources
    res.redirect('/index.html');
  });
}
/*
  // This is called from noteController to get all notes
  app.get('/api/notes', function(req, res) {
    Model.find(function(err, resource) {
      if (err) {
        console.log(err);
      } else {
        res.json(resource);
      }
    });
  });*/

/*  // This is called from noteController to get ONE note
  app.get('/api/notes/:noteID', function(req, res) {
    var noteID = req.params.noteID;
    Model.findOne({id: noteID}, function(err, resource) {
      if (err) {
        console.log(err);
      } else {
        res.json(resource);
      }
    });
  });*/

/*  // Called from noteController to add a NEW note
  app.post('/api/notes', function(req, res) {
    console.log('get here? ' + req.body.note);
    res.json('is this returning');
    var textMessage = "Let's get this working!";
    var noteID = 1;*/

    /*Model.findOne.sort({id: -1}, function(err, resource) {
      if (err) {
        res.send(err);
      } else {
        noteID = resource + 1;
      }
    });

    Model.create({
      id: noteID,
      note: req.body.textMessage,
      done: false
    }, function(err, result) {
      if (err) {
        res.send(err);
      }
      else {
        Model.find(function(err, notes) {
          if (err) {
            res.send(err);
          }
          else {
            res.json(notes);
          }
        });
      }
    });*/
  //});

/*  app.delete('/api/notes/:noteID', function(req, res) {
    Model.remove({ id: req.params.noteID}, function(err, notes) {
      if (err) {
        res.send(err);
      }
      else {
          Model.find(function(err, notes) {
          if (err) {
            res.send(err);
          }
          else {
            res.json(notes);
          }
        });
      }
    });
  });*/

/*  app.put('/api/notes/:noteID', function(req, res) {
     var jsonText = {id: req.params.noteID, note: req.body.textMessage};

    Model.update({ id: req.params.noteID}, {$set: jsonText}, function(err, notes) {
      if (err) {
        res.send(err);
      }
      else {
          Model.find(function(err, notes) {
          if (err) {
            res.send(err);
          }
          else {
            res.json(notes);
          }
        });
      }
    });
  });
}*/
