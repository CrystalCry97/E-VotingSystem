var express = require('express');
var router = express.Router();

/*GET HOMEPAGE */
var app = express();
router.get('/',function(req,res){
  res.render('home');
});

module.export = router;
