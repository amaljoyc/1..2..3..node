function route(path, handle, response, postData) {
	console.log("Inside router");

	if (typeof handle[path] === "function") {
		handle[path](response, postData);
	} else {
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;