/*作用域与上下文*/

// var pet = {
// 	name:'noname',
// 	speak:function(){
// 		console.log(this.name);
// 		console.log(pet == this);
// 	}
// }

// pet.speak();   //this指向pet





// function pet(name){
// 	this.name='name';
// 	console.log(this.name);
// 	console.log(this);     //this===global
// }

// pet('noname')   //this指向这个执行环境里面最顶层的变量global





function pet(name){
	this.name=name;
	this.speak=function(){
		console.log(this.name);
		console.log(this);
	}
}

var cat = new pet('smallcat');

cat.speak();


// js里的this 通常是当前函数的拥有者，我们通常把这个拥有者叫做执行上下文
// this 是js的一个关键字 代表函数运行时自动生成的一个内部对象 只能在函数内部使用

// 执行上下文需要根据当前函数的执行对象而定，因为执行对象在函数运行时才能确定，且能动态改变
// 1.作为对象的方法 
// this在方法内部，this就指向调用这个方法的对象
// 2.函数的调用
// this指向执行环境中的全局对象（浏览器->window  nodejs->global）
// 3.构造函数
// this所在的方法被实例对象所调用，那么this就指向这个实例对象