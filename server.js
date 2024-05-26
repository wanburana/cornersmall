const host = "localhost";
const port = 5000;
const http = require("HTTP");
const fs = require("fs").promises;

let htmlFile;
const reqListenerFunc = function (req, resp) {
    resp.setHeader("Content-Type", "text/html");
    resp.writeHead(200);
    resp.end(htmlFile);
};
const simpleServer = http.createServer(reqListenerFunc);

// // Using Arrow function directly
// const simpleServer = http.createServer( (req, resp) => {
//     resp.setHeader("Content-Type", "text/html");
//     resp.writeHead(200);
//     resp.end(htmlFile);
// });

fs.readFile("./template.html")
    .then(content => {
        htmlFile = content;
        simpleServer.listen(port, host, () => {
            console.log(`Node.js web server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Cannot read index.html file. <br> Error: ${err}`);
        process.exit(1);
    });
