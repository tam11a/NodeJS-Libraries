var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gamezone-dev:admin@db001.myvem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  dbo.collection("auth").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});