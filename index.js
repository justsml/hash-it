var md5 = require('md5');


module.exports = function hashString(str, callback) {


let result = (md5(str));
console.log(result);
// callback(error, result)


  // Add hashing function here
  // pass result using node standard pattern:
  // callback(error, result) // where result is the hash
callback(null, result)
}
