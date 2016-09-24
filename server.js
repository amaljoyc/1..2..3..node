var http = require("http");
var url = require("url");

function start(route, handle) {

	function onRequest(request, response) {
		var path = url.parse(request.url).pathname;
		console.log("Received Request with path '" + path + "'");

		request.setEncoding("utf8");
		postData = "";

		request.addListener("data", function(chunkData) {
			postData += chunkData;
		});

		request.addListener("end", function() {
			route(path, handle, response, postData);
		})
	}

	http.createServer(onRequest).listen(4321);
	console.log("Started server at port 4321...");
}

exports.start = start;
