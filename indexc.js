const sd = require("string_decoder").StringDecoder;
const decoder = new sd("utf8");
const bufa = new Buffer("This is test buffer");
console.log(bufa);
console.log(decoder.write(bufa));
