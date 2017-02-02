var queryString = require('querystring');

var stringify = queryString.stringify({ name: 'cxj', learn: ['vue', 'node'], from: '' });

var stringify_1 = queryString.stringify({ name: 'cxj', learn: ['vue', 'node'], from: '' },',');

var stringify_2 = queryString.stringify({ name: 'cxj', learn: ['vue', 'node'], from: '' },',',':');

console.log(stringify);
console.log(stringify_1);
console.log(stringify_2);

