var EventEmitter = require('events').EventEmitter

var lift = new EventEmitter()

function name(who){
	console.log('i am '+who)
}

lift.on('node',name)

lift.emit('node','paul')

// // 移除事件
// // 不可以使用匿名函数
// // lift.removeListener('node',function(who){
// // 	console.log('i am '+who)
// // });
// function name(who){
// 	console.log('i am '+who)
// }
lift.removeListener('node',name);

lift.emit('node','paul')
