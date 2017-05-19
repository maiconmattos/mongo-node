var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var url = 'mongodb://localhost:27017/sample'
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connnected successfully to server");
    db.close
});

var insertDocuments = function(db, callback) {
    var collection = db.collection('documents');
    collection.insertMany(
        [{a : 1}, {a : 2}, {a : 3}],
        function(err, result) {
            assert.equal(err, null);
            assert.equal(3 , result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the collection");
            callback(result);
        }
    );
}

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    insertDocuments(db, function() {
        db.close;
    })
});
      
