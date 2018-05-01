//==================import=======================
var express = require('express');
var app = express(); //constructor
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var formidable = require('formidable');
var credentials = require('./cred.js');
var mongoose = require('mongoose');
var dbconfig = require('./config/database.js');
var passport = require('passport');
var session = require('express-session');

//==================configure=======================
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.disable('x-powered-by');
app.set('port',process.env.PORT|| 8080); //set port variable for the web server
mongoose.connect(dbconfig.url);// connect to mongodb server

//================ middleware ======================
app.use(require('cookie-parser')(credentials.cookieSecret)); //read cookies for authentication.
app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({extended:true})); //get information from html <form>

app.use(function(req,res,next){
  console.log("User is looking for URL: "+ req.url);
  next();
});

app.get('/bin', function(req,res,next){
  console.log("User Tried to access /bin");
  throw new Error('/bin doesn\'t exist');
});
//catch Error
app.use(function(err,req,res,next){
  console.log('Error:' + err.message);
  next();
});

app.use(passport.initialize());
app.use(passport.session());

//================ routes ==========================
require('./routes/routes.js')(app, passport);


//================== start server ======================
app.listen(app.get('port'),function(){
  console.log("Server started on port 8080");
})
