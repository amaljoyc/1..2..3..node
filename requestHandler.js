var querystring = require("querystring");

function home(response, postData) {
	console.log("Inside home handler");

	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" method="post">'+
		'<textarea name="text" rows="20" cols="60"></textarea>'+
		'<input type="submit" value="Submit text" />'+
		'</form>'+
		'</body>'+
		'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function start(response,postData) {
	console.log("Inside start handler");

	setTimeout(function () {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Started");
		response.end();
	}, 5000);
}

function upload(response, postData) {
	console.log("Inside upload handler");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Received the following data... " + querystring.parse(postData).text);
	response.end();
}

exports.home = home;
exports.start = start;
exports.upload = upload;