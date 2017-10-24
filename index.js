module.exports = function hashString(str, callback) {
  var passwordHash = require('password-hash')
 var result = passwordHash.generate(str)
  callback(null, result)
  console.log(result)
}


module.exports = function hashString(str, callback) {
var bcrypt = require('bcrypt')
const saltRounds = 10;
const password = str;
var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync(password, salt)
console.log(hash)
  callback(null, hash)

}
