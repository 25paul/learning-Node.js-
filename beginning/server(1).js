const http = require('http');

const hostname = '127.0.0.1';
const port = 2999;

const server = http.createServer((req, res) => {
  // console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  // console.log(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//首先先监听2999端口
//当浏览器输入链接，发送请求的时候就会建立连接并且得到响应  