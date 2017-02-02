# URL模块：
URL网址解析的好帮手：http://nodejs.cn/api/url.html
## URL和URI的区别：
URI，统一资源标识符，首先它是一个字符串。其次，它是一个可以唯一标识某一资源的字符串。<br/>
URL，统一资源定位符，首先，它是一种URI，其次，它可以标识资源的路径。<br/>
URN，统一资源名，首先，它是一种URI，其次，它代表资源的名字。<br/>
1. URI是统一资源标识符，是一个用于标识某一互联网资源名称的字符串。 该种标识允许用户对任何（包括本地和互联网）的资源通过特定的协议进行交互操作。URI由包括确定语法和相关协议的方案所定义。由是三个组成部分：访问资源的命名机制、存放资源的主机名、资源自身的名称，由路径表示。<br/>
比如文件的URL，服务器方式用file表示，后面要有主机IP地址、文件的存取路径（即目录）和文件名等信息。有时可以省略目录和文件名，但“/”符号不能省略。<br/>
例：file://a:1234/b/c/d.txt代表获取资源使用ftp协议，资源目标是a主机的1234端口的b目录下的c目录下的d.txt。<br/>
2. URL是统一资源定位，是对可以从互联网上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。<br/>
比如百度URL即是http://www.baidu.com。<br/>

在git bash中进入node，然后输入url：<br/>
```
  { parse: [Function: urlParse],
    resolve: [Function: urlResolve],
    resolveObject: [Function: urlResolveObject],
    format: [Function: urlFormat],
    Url: [Function: Url] }
```

## url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
可以把URL地址解析成对象<br/>
<code>
url.parse('https://nodejs.org:8080/dist/latest-v6.x/docs/api/url.html?form=student&form=teacher#url_url_strings_and_url_objects')。
</code>
```
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'nodejs.org:8080',
  port: '8080',
  hostname: 'nodejs.org',
  hash: '#url_url_strings_and_url_objects',
  search: '?form=student&form=teacher',
  query: 'form=student&form=teacher',
  pathname: '/dist/latest-v6.x/docs/api/url.html',
  path: '/dist/latest-v6.x/docs/api/url.html?form=student&form=teacher',
  href: 'https://nodejs.org:8080/dist/latest-v6.x/docs/api/url.html?form=student
&form=teacher#url_url_strings_and_url_objects' }
```
此外，parse还可以加上两个参数。<br/>
第二个参数：<br/>
<code>
url.parse('https://nodejs.org:8080/dist/latest-v6.x/docs/api/url.html?form=student&form=teacher#url_url_strings_and_url_objects',true)
</code><br/>
默认的是false，如果设置为true的话query就会使用queryString这个module。可以对比一下，但是search还是一样。<br/>
第三个参数：<br/>
对比：<br/>
<code>
url.parse('//nodejs.org:8080/dist/latest-v6.x/docs/api/url.html?form=student&form=teacher#url_url_strings_and_url_objects',true)
</code><br/>
和<br/>
<code>
url.parse('//nodejs.org:8080/dist/latest-v6.x/docs/api/url.html?form=student&form=teacher#url_url_strings_and_url_objects',true,true)
</code><br/>
加了true之后就可以识别了。<br/>

## url.format(urlObject)
```
url.format({
  protocol: 'https:',       //协议
  slashes: true,          //是否有协议的 
  auth: null,            
  host: 'nodejs.org',      //http服务器的IP地址或者域名
  port: null,             //端口，默认为80端口
  hostname: 'nodejs.org',                        //主机名
  hash: '#url_url_strings_and_url_objects',          //哈希值，某个锚点
  search: null,                                 //查询字符串参数
  query: null,           //发生给http服务器的一个数据。比如问号后面的键值对
  pathname: '/dist/latest-v6.x/docs/api/url.html',    //访问资源路径名
  path: '/dist/latest-v6.x/docs/api/url.html',         //路径
  href: 'https://nodejs.org/dist/latest-v6.x/docs/api/url.html#url_url_strings_and_url_objects' })
```
## url.resolve(from, to)
<code>
url.resolve('https://nodejs.org','api/url.html')
</code><br/>

*实例url.js*
