var queryString = require('querystring');

var parse = queryString.parse('name=cxj&learn=vue&learn=node&from=');

var parse_1 = queryString.parse('name=cxj,learn=vue,learn=node,from=',',');

var parse_2 = queryString.parse('name:cxj,learn:vue,learn:node,from:',',',':');

console.log(parse);
console.log(parse_1);
console.log(parse_2);

