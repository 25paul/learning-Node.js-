var pet = {
	name:'none',
	speak:function(say){
		console.log(say + ' ' + this.name);
	}
}

//直接调用
pet.speak('dog');

//改变this指向
var dog = {
	name:'haven'
}
pet.speak.call(dog,'its name is')