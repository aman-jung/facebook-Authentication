const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
	facebookID:String,
	tokens:Array
});

mongoose.model('users',newSchema);