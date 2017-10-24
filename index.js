// const passwordHash = require('password-hash');

// module.exports = function hashString(str, callback) {
      
//   const hashed = passwordHash.generate(str)

//   callback(null, hashed)
// }

//the above works, but without salt

const bcrypt = require('bcrypt');

module.exports = function hashString(str, callback) {
  //declare salt length
  const saltRounds = 10;

  //generate the salt with bcrypt
  var salt = bcrypt.genSaltSync(saltRounds);

  //input str (or res, if you set it as first parameter in hashString function) and salt variable from previous line
  const hashed = bcrypt.hashSync(str, salt)

  //calling the result, with null first in case it doesnt work
  callback(null, hashed)

}