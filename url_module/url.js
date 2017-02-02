var url = require('url');
var str = 'https://nodejs.org:8080/dist/latest-v6.x/docs/api/url.html?form=student&form=teacher#url_url_strings_and_url_objects';
var urlObj = url.parse(str)
var urlObj_true = url.parse(str,true); //用于将字符串转成对象
console.log(urlObj);
console.log(urlObj_true);

console.log('format: ' + url.format(urlObj));//用于将对象转成字符串