var mongoose = require('mongoose');
var cryp = require('crypto');

var userSchema = new moongoose.Schema({
  email: {type:String,unique:true,required:true},
  name:{type:String,required:true},
  hash:String,
  salt:String

});

userSchema.methods.setPassword = function(password){
  this.salt = cryp.randomBytes(16).toString('hex');
  this.hash = cryp.pbkdf2Sync(password, this.salt,1000,64,'sha512').toString('hex');
}

userSchema.methods.validationPassword = function(password){
  var hash = cryp.pbkdf2Sync(password, this.salt,1000,64,'sha512').toString('hex');
  return this.hash === hash;
}

module.exports = mongoose.model('User',userSchema);
