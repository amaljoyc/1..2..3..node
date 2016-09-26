var express = require('express');
var router = express.Router();

function hello(request, respose) {
	var name = request.query.name;
	var body = "";

	if (name) {
		body = 'Hello ' + name;
	} else {
		body = 'Hello there!';
	}

	respose.io.emit('messages', body);
	respose.send(body);
}

router.get('/hello', hello);

module.exports = router;