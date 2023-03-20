const sayHello = require('./logger.js');

function hello(name) {
    console.log('Hello' + name)
}
//hello('Isaac')

console.log(); //global

var message = 'Whatever';
console.log(global.message); //this would return undefined because var and functions are not added to the global scope

console.log(sayHello); //this logs the entire content of logger.js
console.log(sayHello.nameIWantToCallIt); //this returns the nameIWant... which points to the url variable in logger.js
sayHello.log('Welcome'); //this accesses the log function from logger.js