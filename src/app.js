var express = require('express');
var app = express();
var path = require('path');

// controllers
var homeController = require('./controllers/homecontroller');
var salesController = require('./controllers/salescontroller');

var public = path.join(__dirname, 'public');
console.log("Useing public path " + public);

app.set('view engine', 'ejs');
app.use(express.static(public));

app.get('/', homeController.index);
app.get('/sales', salesController.index);

var server = app.listen(3000, function(){
    console.log("Server listening on port 3000");
});