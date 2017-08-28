const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const BookSchema=new Schema({
	name:{
		type:String,
		require:[true,'Name field is required']
	},
	rank:{
		type:String
	},
	available:{
		type: Boolean,
		default:false
	}

});

const Book = mongoose.model('book',BookSchema);

module.exports= Book;	