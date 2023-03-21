/* console.log("Welcome to Node.js");

const os = require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename); */

const math = require('./math') //import the math module and the exported functions

console.log(math.add(2, 3))

const { mult, div } = require('./math'); //this is called destructuring the import so we don't have to use "math.mult"

console.log(mult(2, 3));