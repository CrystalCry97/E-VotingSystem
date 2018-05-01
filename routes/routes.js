module.exports = function(app,passport)
{

  //====================routes for get request===============
  app.get('/',function(req,res){
    console.log( __dirname + " is the path");
    res.render('home');
  });
  app.get('/about',function(req,res){
    res.render('about');
  });

  app.get('/login',function(req,res){
    res.type('text/html');
    console.log( __dirname + " is the path");
    res.render('login');
  });

  app.get('/signup',function(req,res){
    res.render('register');
  });


// ============ routes for post request ==================
  app.post('/login',function(req,res){
    res.send("Testing Login");
  });

  app.post('/register',function(req,res){
    res.send("Testing Register");
  });

  //========create custom 404 page ======================
  app.use(function(req,res){
    //res.type('text/plain');
    res.status(404);
    res.render(404);
  });

  //create custome 500 page
  app.use(function(req,res){
    console.error(err.stack);
    //res.type('text/plain');
    res.status(500);
    res.render(500);
  });

}
