var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bookstore');
const Book= require('../models/book');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended:true
}))

router.get('/', function(req, res) {
	Book.find({})
	.exec((err, emp)=>{
		if(err)
			res.send("Error")
		else
			res.json(emp)
	})
});

router.post('/', function(req, res,next) {
	Book.create(req.body).then(function(data){
		res.send(data);
	});
  
  	 });

router.put('/update/:id', function(req, res, next){
    Book.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Book.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
           
        });
    });
});


router.delete('/del/:id', function(req, res,next) {
 Book.findByIdAndRemove({_id:req.params.id}).then(function(data){
 	res.send(data);
 })
});


module.exports=router;
