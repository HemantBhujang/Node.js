const path = require("path");
const util = require("util");
const v8 = require("v8");
console.log(path.basename(__filename));

const dirUploads = path.join( // this created path for us
   // any strings we pass here it will be appended to the path.
    __dirname,
    "ww",
    "filename",
    "uploads"
);

console.log(dirUploads);

util.log(path.basename(__filename));// it provides more information about filename such as date and time.
util.log(path.basename(__dirname));// directory name.

util.log(v8.getHeapStatistics());// how much memory our app is used in heap