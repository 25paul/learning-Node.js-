/*
exports
*/

// var counter  = 0;    

// exports.printNextCount = function (){    
//     counter += 2;
//     console.log(counter);
// }
// var isEq = (exports === module.exports);    //true 

// console.log(isEq);


/*
module.exports
*/

var counter  = 0;    

module.exports = function(){    
    counter += 2;
    this.printNextCount = function()
    {
        console.log(counter);    
    }
}

var isEq = (exports === module.exports);

console.log(isEq);


/*
module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是module.exports而不是exports。
所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是module.exports本身不具备任何属性和方法。
如果，module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。

同时使用的时候会是false。
所以建议：
 1.最好别分别定义module.exports和exports
 2.NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports

 http://www.thinksaas.cn/topics/0/35/35598.html
*/