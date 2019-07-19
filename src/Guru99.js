var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.get('/', function(req,res) {

});

var server = app.listen(3000, function() {
    console.info("Express App running on port 3000");
});
