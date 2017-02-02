var EventEmitter = require('events').EventEmitter

var lift = new EventEmitter()

lift.on('node',function(who){
	console.log('i am '+who)
})

lift.emit('node','paul')