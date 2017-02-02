const http = require('http');   //加载一个HTTP的模块，这个模块是有JS编写，负责创建web服务器及处理HTTP相关的任务等等

const hostname = '127.0.0.1';
const port = 3000;

//通过createServer来创建web服务器。请求体req和响应体res，req用来获取请求相关的信息，比如请求从那个URL过来的，请求
//类型是get还是post等等，res用来告诉服务器给这个浏览器响应一些内容。
// 发送 HTTP 头部   
// HTTP 状态值: 200 : OK  
// 内容类型: text/plain 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  res.end('Hello World\n');
});
//当请求进来的时候，应该告诉node.js下一步要做什么，这时给createServer传入一个匿名回调函数
//通过listen让服务器在3000端口监听请求,就可以收到任何来自端口的请求
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); //终端打印信息
}); 
