//console.log("Hello World"); //example hello world in javascript

// one of methode to import module in javascript
// we import a module and assign in to a variable reference that we can use later.
var express = require('express'); //we import express js
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); //initialise our app, like our main

/*middlewhere function that can access the HTTP get and post request and handle it
such as redirect the request to a view or something.
this is a simple example of middleware, where it use next() to go to next function
var logger = function(res,res,next){
  console.log('Logging ...');
  next();
} // order of middleware is important, in this case, because it placed before hello world,
// it will first run the Logging function then next to hello world.

app.use(logger); this function will run the logger function we just created
*/

//View Engine middleware
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//another example of using middleware
//this is example of bodyParser middleware
app.use(bodyParser.json()); //this use the json parse function from the body-parser module
app.use(bodyParser.urlencoded({extended:false}));

// set static path for our css,jquesry stuff like that.
//the folder Started here will overide all the our app.get
// if we want to use angular, we put it in the folder in this case named public
//app.use(express.static(path.join(__dirname,'public'))); //folder name public will contain our css,html jquery file

//req(request), res(respond)
app.get('/', function(req,res){
  res.render('index.ejs') //this function will respond with a text "Hello World" to the client that request,
});// to handle get request. when user want something from server they sen get request

//req(request), res(respond)
app.get('/about', function(req,res){
  res.send("This is About Page"); //this function will respond with a text "This is About Page" to the client that request,
});// to handle get request. when user want something from server they send get request


//create a Server on port 3000
app.listen(3000, function(){
  console.log("Server Started on port 3000...");
})
