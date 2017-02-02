var queryString = require('querystring');

var ecap = queryString.escape('{hello}');

var uecap = queryString.unescape(ecap);

console.log(ecap);

console.log(uecap)
