module.exports = function hashString(str, callback) {
  var bcrypt = require('bcrypt');
  const saltRounds = 10;
  const myPlaintextPassword = str;

  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(myPlaintextPassword, salt);

  callback(null, hash)
}
