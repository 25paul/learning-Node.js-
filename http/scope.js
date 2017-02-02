var globalVariable = 'it is a global variable!';

function globalFunction(){
	var localVariable = 'it is a local variable!';

	console.log(globalVariable);
	console.log(localVariable);
}

globalFunction();

// 全局变量和局部变量，能访问也能修改