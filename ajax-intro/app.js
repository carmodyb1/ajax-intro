var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.render("index")
});

app.get('/numbers', function(req, res) {

	res.send([
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		])
})

// app.post('/add', function(req, res) {
	// res.send
// })




var server = app.listen(3762, function() {
	console.log('Express server listening on port ' + server.address().port);
});
