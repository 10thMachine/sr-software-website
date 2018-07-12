const 	express 	= require('express'),
		app 		= express(),
		bodyParser 	= require('body-parser');

// APP CONFIG
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// RESTFUL ROUTING
app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000, function(){
	console.log("SR Software site is running");
});