# 简介
Node.js可以使JavaScript流畅地运行在服务端，简单的说 Node.js 就是运行在服务端的 JavaScript。是一个事件驱动I/O服务端JavaScript环境。</br>
Node.js虽然使用的是js后缀，但他其实采用谷歌chrome的V8引擎（V8引擎执行Javascript的速度非常快，性能非常好），由C++语言编写的，可以为JavaScript提供一个运行环境。Node.js是一个基于Chrome JavaScript运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。Node.js 使用事件驱动， 非阻塞I/O 模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用。</br>
我们平时所用的浏览器可以用来解析JS代码，Node.js不仅可以解析JS代码（它没有浏览器安全级的限制），还提供了系统级别的API：比如文件的读写、进程的管理、网络通信等等。<br/>

# 发展史：
2009年2月，Ryan Dahl在博客上宣布准备基于V8创建一个轻量级的Web服务器并提供一套库。<br/>
2009年5月，Ryan Dahl在GitHub上发布了最初版本的部分Node.js包，随后几个月里，有人开始使用Node.js开发应用。<br/>
2009年11月和2010年4月，两届JSConf大会都安排了Node.js的讲座。<br/>
2010年年底，Node.js获得云计算服务商Joyent资助，创始人Ryan Dahl加入Joyent全职负责Node.js的发展。<br/>
2011年7月，Node.js在微软的支持下发布Windows版本。<br/>
### 相关文章
[Node.js与io.js那些事儿](http://www.infoq.com/cn/articles/node-js-and-io-js/)<br/>
[关于node.js各个版本的不同](https://cnodejs.org/topic/5762549a50312f1107e615d7)<br/>
[Node.js的历史版本](https://nodejs.org/dist/)<br/>
[Daily node.js](http://www.dnodejs.com/history.html)</br>
### 可以关注这几个网站：
[npm](https://www.npmjs.com/)
[Github](https://github.com/nodejs/node)
[Node.js](http://nodejs.cn/)
[Stack overflow](http://stackoverflow.com/)

npm命令用来安装nodejs的模块。因为在node.js开发中，我们需要用到很多模块，用npm来管理这些依赖模块会比较方便。</br>
Package.json文件定义了需要安装哪些依模块赖，在package.json所在的目录下执行npm install命令，就可以安装依赖模块在这个目录的node_modules文件夹下。</br>
如果是npm instal -g，则是安装在全局的地方，所有node项目都可以使用这个module，安装路径可以通过npm config get prefix查看。</br>

# 安装：
注意：node.js的版本一定要和API文档保持同步，不同版本的node.js接口不一定相同，会影响一些接口使用不同，甚至相同的接口使用规范也可能会有区别。</br>
安装方法：[详情查看](http://www.runoob.com/nodejs/nodejs-install-setup.html)<br/>
默认情况下NodeJS安装会同时安装npm。<br/>
注：全局：执行npm  install  <模块的名字>  -g 就会将模块装在全局路径下，当用户在程序中require(<模块的名字>)的时候不用考虑模块在哪，如果不修改全局路径，用户下载的模块会默认在C:\Users\Administrator\AppData\Roaming\npm这个路径下。<br/>
局部：执行npm  install  <包的名字>（注意少了-g）就会将模块安装在dos窗当前指向的路径下。<br/>
但是有时候我们要先配置npm的全局模块(node_global)的存放路径以及缓存(global_cache)的路径。[参考](http://www.cnblogs.com/GeoChen/p/5496322.html)<br/>

# 创建一个简单的服务器
[可以参考官网](https://nodejs.org/en/about/)<br/>
Node.js是本质上是JavaScript的一个执行环境，只是由于他的封装，加上更多web底层的处理，赋予他更多的能力。<br/>
JavaScript在浏览器的执行环境：控制台。<br/>
直接在终端运行node就可以进入node环境，可以编译js代码（它是JavaScript的一个运行环境嘛），但是跟浏览器不一样的是，浏览器有全局变量window、document，node没有，但是有其他，比如process。<br/>
详情查看示例*server.js、server(1).js、server(2).js*
