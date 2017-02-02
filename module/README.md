在我们进行JavaScript开发过程中，都是通过var或function可以定义全局变量或者函数，但是当有大量的协作或者大量的JS文件引入到页面时，容易出现变量覆盖或者函数的重写等错误，这是因为JavaScript天生就缺少一种模块的管理机制来隔离实现不同功能的JavaScript的判断，避免他们相互污染，因此我们经常使用命名空间的方式，把变量和函数限制在某个特定的作用域内，自己约定一套命名规范来约束代码，从而保证代码的安全执行。比如JQ里面的一些方法必须用jQuery或者$符号来访问，直接是访问不到的。<br/>

Common.js不像jQuery那样具体负责某个职能的JS库，他是一套规范，来约定JavaScript应该怎么组织，怎么编写。包括modules、packages、system等等。<br/>

Node.js借鉴Common.js这种模块组织理念并根据Common.js实现一套管理系统，在node.js中，每个.js文件都可以看做是一个独立的模块，里面不需有命名空间，不用担心变量污染等等。这些模块可以通过组合依赖形成更强的的模块。模块可以通过npm引入，他们每个都是独立完整的。*示例school*。<br/>
[深入浅出Node.js（三）：深入Node.js的模块机制](http://www.infoq.com/cn/articles/nodejs-module-mechanism/)

通过node.js官网也可以看到node.js提供了很多模块：http://nodejs.cn/<br/>

这些核心模块被编译成二进制文件，可以require('模块名')去获取；核心模块具有最高的加载优先级（有模块与核心模块同名时会体现）。<br/>

Node.js还有一类模块为文件模块，可以是JavaScript代码文件（.js作为文件后缀）、也可以是JSON格式文本文件（.json作为文件后缀）、还可以是编辑过的C/C++文件（.node作为文件后缀）；
文件模块访问方式通过require('/文件名.后缀')    require('./文件名.后缀')    requrie('../文件名.后缀') 去访问，文件后缀可以省略；以"/"开头是以绝对路径去加载，以"./"开头和以"../"开头表示以相对路径加载，而以"./"开头表示同级目录下文件，
前面提到文件后缀可以省略，Nodejs尝试加载的优先级 js文件 > json文件 > node文件<br/>
*示例timer*。

我们可以使用require函数来加载模块。不用担心在代码里面调用require会影响全局的命名空间，因为node里面就没有全局点名空间的概念。语法等没有错误的话，require就会返回这个模块对象，就是那个export。<br/>
Exports和modules.export的区别:<br/>
http://nodejs.cn/api/modules.html<br/>
https://cnodejs.org/topic/5231a630101e574521e45ef8<br/>
*示例export*。

在node.js中，模块可以分为核心模块、文件模块和第三方模块。
