# Node.js的事件模块
Node.js中，很多对象会发出事件。如，fs.readStream打开文件时会发出一个事件。 <br/>
所有发出事件的对象都是events.EventEmitter的实例，可以通过require("event");获得event模块。<br/>
监听器函数(listeners)可以添加给对象，对象发出事件时，对应的函数就会被执行。在监听器函数中，this引用的是它（监听器函数）。*示例eventsListener.js*。<br/>
NodeJS 没有浏览器的事件冒泡，事件捕获机制。<br/>
events是node.js 最重要的模块，events模块只提供了一个对象events.EventEmitter， eventEmitter.对象有两个方法，event.emit--事件发射；event.listener 事件监听。EventEmitter 的核心是事件发射与事件监听器。*示例events.js*。<br/>
可最多向一个事件添加十个监听（回调方法）。Node.js中大部分的模块，都继承自Event模块。*示例event-first.js*。<br/>
EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。 <br/>
可最多向一个事件添加十个监听（回调方法）*示例events.js*。<br/>
当超过十个的时候会发生内存泄漏，不过这个限制的值是可以修改的。<br/>

事件只有监听没有发射时不会打印出来的<br/>
怎么判断事件是否被监听过呢？返回true则有监听，返回false则没有。*示例events.js*。<br/>

# 移除事件：
*示例eventsRemove.js*。<br/>
查询还有多少个事件监听，要传具体的事件名<br/>
<code>console.log(ee.listeners('ni').length)</code>。*示例event-first.js*。</br>
两种方法。<br/>

# 移除所有事件：
1、不传参
2、removeAllListener
