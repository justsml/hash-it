var passwordHash = require('password-hash');

module.exports = function hashString(str, callback) {
  var hashedPassword = passwordHash.generate(str);
  // Add hashing function here
  // pass result using node standard pattern:
  // callback(error, result) // where result is the hash
  callback(null, hashedPassword)
}
