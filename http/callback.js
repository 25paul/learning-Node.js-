function learn(something){
	console.log(something);
}
function we(callback,something){
	something += ' is cool';
	callback(something);
}
we(learn,'Node.js');  //具名函数
we(function(something){console.log(something)},'cxj')   //匿名函数