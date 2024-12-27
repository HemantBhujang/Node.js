/*
const myModule = require("./myModule");// we are exporting whole myModule.js so that if we want to use there function we need to use first myModule then that function such as myModule.inc();
*/

const {inc,dec,getCount, who} = require("./myModule")// we just import functions from my module so here we can directly declare or use the function.

inc();
inc();
// console.log(myModule.anything);
console.log(getCount());
console.log(who);

