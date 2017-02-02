// <script src="a.js"></script>
// <script src="b.js"></script>
// <script src="c.js"></script>

// var i = 0;
// while(true){
// 	i++;
// }


// 顺序执行
// var c = 0;

// function printIt(){
// 	console.log(c);
// }

// function plus(){
// 	c += 1;
// }

// plus();
// printIt();


//异步执行
// var c = 0;

// function printIt(){
// 	console.log(c);
// }

// function plus(){
// 	setTimeout(function(){
// 		c += 1;
// 	},1000)
// }

// plus();
// printIt();


//可以使用回调函数来得到1
var c = 0;

function printIt(){
	console.log(c);
}

function plus(callback){
	setTimeout(function(){
		c += 1;
		callback();
	},1000)
}

plus(printIt);
// printIt();