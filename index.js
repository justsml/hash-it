var passwordHash = require('password-hash');
module.exports = function hashString(str, callback) {
  var hashedPassword = passwordHash.generate(str);
  callback(null, hashedPassword);
};
