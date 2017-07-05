const express = require('express');
const mustacheExpress = require('mustache-express');
//const robots = require('./robots.json');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('public'));

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost/usersdb';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
    findDocuments(db, function() {
      db.close();
    });
});

var robots;
var findDocuments = function(usersdb, callback) {
  // Get the documents collection
  var collection = usersdb.collection('robots');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
   robots = docs;
    callback(docs);
  });
}

app.get("/robot", function(req, res){
res.render("robot",{users:robots})
});

app.listen(3000, function (){
  console.log("App is running on part 3000 successfully.")
});
