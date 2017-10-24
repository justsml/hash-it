module.exports = function hashString(str, callback) {
  var passwordHash = require('password-hash')
 var result = passwordHash.generate(str)
  callback(null, result)
  console.log(result)
}
