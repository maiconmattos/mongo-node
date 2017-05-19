var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var url = 'mongodb://localhost:27017/sample'
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connnected successfully to server");
    db.close
});
