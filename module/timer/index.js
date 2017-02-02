var counter = require('./modules_counter');
console.log('第一次调用模块[modules_counter]');
// counter.seOutputVal(10);               //设置从10开始计数
// counter.setIncrement (10);             //设置增量为10
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
/*
    require多次调用同一模块不会重复加载,Node.js会根据文件名缓存所有加载过的文件模块。所以这里会继续增加。
    注意：通过文件名缓存是指实际文件名，并不会因为传入的路径形式不一样而认会是不同的文件。
*/
var counter = require('./modules_counter');
console.log('第二次调用模块[modules_counter]');
counter.printNextCount();



