const fs = require('fs');

fs.readFile('file.txt',(err,data)=>{ //<Buffer 48 65 6d 61 6e 74 20 42 68 61 69 69 69>
    console.log(err,data)
})

fs.readFile('file.txt','utf8',(err,data)=>{ //Hemant Bhaiii --> actual output
    console.log(err,data)
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// fs.writeFile('file.txt',"This is written data2 Hemant.",()=>{
//     console.log("Successfully Written to the file");
// })