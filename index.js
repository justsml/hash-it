  var passwordHash = require('password-hash');

 module.exports = function hashString(string, callback) {
  var hashedPassword = passwordHash.generate(string);
   callback(null, hashedPassword)
 }
