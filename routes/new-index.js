
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://tytest:DpHs5wYG2kIVrAbx@cluster0.d4vuglp.mongodb.net/?retryWrites=true&w=majority";

//mongodb+srv://tytest:<password>@cluster0.d4vuglp.mongodb.net/?retryWrites=true&w=majority

router.get('/', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("tytesting123");
		// dbo.collection("tydata").find({}).toArray(function(err, result) {
			dbo.collection("tydata").findAll({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;