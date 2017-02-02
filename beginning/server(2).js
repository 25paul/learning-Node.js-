const http = require('http');         //请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。

const server = http.createServer(function(rep,res){
	// res.statusCode = 200;
 //    res.setHeader('Content-Type', 'text/plain');
  
 //    res.end('create a simple node application\n');

 	res.writeHead(200, {"Content-Type": "text/plain"});   //使用 response.writeHead() 函数发送一个HTTP状态200 和 HTTP头的内容类型（content-type）
 	res.write("hello");    //使用 response.write() 函数在HTTP相应主体中发送文本“Hello World”。
 	res.end();   //调用 response.end() 完成响应。
});

server.listen(8888,function(){console.log("successful!")})

//调用http模块提供的函数： createServer 。这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。