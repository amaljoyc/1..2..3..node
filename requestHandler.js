function start(response) {
	console.log("Inside start handler");

	setTimeout(function () {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Started");
		response.end();
	}, 5000);
}

function upload(response) {
	console.log("Inside upload handler");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Uploaded");
	response.end();
}

exports.start = start;
exports.upload = upload;