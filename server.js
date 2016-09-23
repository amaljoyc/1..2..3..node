var http = require("http");

function onRequest(request, response) {
	console.log("Received Request!")
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

http.createServer(onRequest).listen(4321);

console.log("Started server at port 4321...")
