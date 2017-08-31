var express= require('express');
var app= express();
var bodyParser= require('body-parser');
var mongoose= require('mongoose');


var api= require('./routes/api')




app.use('/api',(api));


/*app.get('/',function(req,res){
	res.send('Hello');
});*/

app.listen(3000);
console.log('Running on port 3000...');


module.exports = app;
