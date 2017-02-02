# QueryString:参数处理小利器
前后端开发经常遇到一个点：参数处理，因为我们需要把参数追加到url地址中发送给服务器，服务器拿到的是字符串的参数串，他不知道个数、参数名、参数值等等。这时就需要一个途径来把这些参数一个一个拎出来，放到对象里面，这样就可以遍历这个对象，也可以直接获取它的值了。比如当我们向后台请求数据的时候，请求信息包括路径还有一下参数，这时就需要对这些参数做解析了。<br/>
### 有四个方法：
* querystring.escape(str)
* querystring.parse(str[, sep[, eq[, options]]])
* querystring.stringify(obj[, sep[, eq[, options]]])
* querystring.unescape(str)

直接 require('querystring') 即可使用

<code>querystring.stringify(obj[, sep[, eq[, options]]])</code><br/>
序列化<br/>
将JSON对象格式化为查询字符串格式的字符串，默认的分隔符为：“&”和“=”。<br/>
第一个参数：序列化；<br/>
第二个参数：连接符；<br/>
第三个参数：将键值对中间的等号替换掉。<br/>
*示例stringify.js*.

<code>querystring.parse(str[, sep[, eq[, options]]])</code><br/>
反序列化<br/>
根据“&”和“=”将字符串进行分割，反序列化为JSON对象，而options包含的maxKeys默认设置为1000，如果将其设置为0则表示没这个限制。<br/>
*示例parse.js*。<br/>

<code>querystring.escape(str)与querystring.unescape(str)</code><br/>
进行转移和反转义。<br/>
*示例escape.js*。<br/>
