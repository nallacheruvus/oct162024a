const fs = require("fs");

console.log(`${process.arch}`);
console.log(`${process.pid}`);
console.log(`${process.platform}`);
console.log(`${process.version}`);

process.argv.forEach((v, i, a) => {
    console.log(`${i}:${v}`);
});
const ws = fs.createWriteStream("c:\\delhiofficefiles\\processinfo.txt");
ws.write(JSON.stringify(process));
ws.end();
// console.log(process);

