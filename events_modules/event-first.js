var eventone = require('events').EventEmitter;
var ee = new eventone();

ee.setMaxListeners(11);

ee.on('ni',function(name){
	console.log('1 name is ' + name);
})
ee.on('ni',function(name){
	console.log('2 name is ' + name);
})
ee.on('ni',function(name){
	console.log('3 name is ' + name);
})
ee.on('ni',function(name){
	console.log('4 name is ' + name);
})
ee.on('ni',function(name){
	console.log('5 name is ' + name);
})
ee.on('ni',function(name){
	console.log('6 name is ' + name);
})
ee.on('ni',function(name){
	console.log('7 name is ' + name);
})
ee.on('ni',function(name){
	console.log('8 name is ' + name);
})
ee.on('ni',function(name){
	console.log('9 name is ' + name);
})
ee.on('ni',function(name){
	console.log('10 name is ' + name);
})
ee.on('ni',function(name){
	console.log('11 name is ' + name);
})

ee.emit('ni','cxj');


// 怎么判断事件是否被监听过呢？返回true则有监听，返回false则没有
var hasListener = ee.emit('ni','cxj');
var hasNoListener = ee.emit('nihao','cxj');
console.log(hasListener);
console.log(hasNoListener);

// 事件监听个数
// console.log(ee.listeners('ni').length)
console.log(eventone.listenerCount(ee,'ni'));