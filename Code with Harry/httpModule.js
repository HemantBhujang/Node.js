const http = require('http');

const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
    // console.log(req);// we are getting all info about request
    console.log(req.url);// here we are accessing server website!
    res.statusCode = 200;// this is status code for OK.
    res.setHeader('content-type', 'text/html')

    if (req.url == '/') {
        // res.hemant();// we know that there is no funtion as hemant. so here we use this for the server crashing purpose
        // now for handling server crash we use NODEMON
        res.statusCode = 200;
        res.end("<h1>This is default Page !</h1>")
    }
    else if (req.url=='/about'){
        res.statusCode = 200;
        res.end('<h1>hey guys i am hemant from DIEMS</h1>')
    }
    else{
    res.statusCode = 404;//not found 
    res.end('<h1>Page Not Found!</h1>');
}// this curly braces also important! server will crash without them.
});

server.listen(port, () => {
    console.log(`Server is Listening on port : ${port}`);
    
});