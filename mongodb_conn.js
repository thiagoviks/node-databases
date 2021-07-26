const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://maki:testingMongo@127.0.0.1:27017/admin';

// Create mongo connection

MongoClient.connect(mongoURI, (err, db) => {
	if(err) throw err;
	console.log("Connect to MongoDB");
	db.close();
});
