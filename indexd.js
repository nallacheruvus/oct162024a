const qs = require("querystring");
const qstr = "name=satish&comp=Linux";
const obj = qs.parse(qstr);
console.log(obj);
