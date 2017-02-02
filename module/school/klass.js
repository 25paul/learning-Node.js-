var student = require('./student');  //将这个模块对象赋给student
var teacher = require('./teacher');
function add(teacherName,students){
	teacher.add(teacherName);    //这些就是前面export所暴露的API
	students.forEach(function(item,index){
		student.add(item);
	})
}
exports.add = add;
//跟module.exports = add是一样的