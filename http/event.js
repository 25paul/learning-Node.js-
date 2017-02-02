function clickBtn(){
	window.alert('click button');
}

var btn = document.getElementById('#button');

btn.addEventListener('click',clickBtn);

// 函数不是马上执行，而是事件触发之后才执行的

// 