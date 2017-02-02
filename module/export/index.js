/*
exports
*/
// var Counter = require('./export');

// Counter.printNextCount();


/*
module.exports
*/

var Counter = require('./export');
var counterObj = new Counter();
counterObj.printNextCount();