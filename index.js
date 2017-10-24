var passwordHash = require('password-hash');

module.exports = function hashString(str, callback) {
  
   var hashed = passwordHash.generate(str)

  callback(null, hashed)
}
