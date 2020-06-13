var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');//lowbd co nhieu adapte
var adapter = new FileSync('db.json');

db = low(adapter);

db.defaults({users:[] , sessions: []})
	.write();

module.exports = db;