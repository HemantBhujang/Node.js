const fs = require("fs");

let hb = `
This is new created file.
========================

 I am happy to create this file.'
 Thanks to --> Eve Porcello (LinkedIn Learning)
 *********************
`
fs.writeFile("newText.txt",hb.trim(),function(){

    fs.appendFileSync(
        "newText.txt",
        "\n\n ###Hello from Appent File Synchronously"//this will append the text into file.
    )

    console.log("Successfully Created a File.");
    
})