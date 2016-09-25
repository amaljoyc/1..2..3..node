var express = require('express');
var router = express.Router();

function common(request, respose, next) {
	console.log('request received!');
	next();
}

function hello(request, respose) {
	var name = request.query.name;
	var body = "";

	if (name) {
		body = 'Hello ' + name;
	} else {
		body = 'Hello there!';
	}

	respose.send(body);
}

function helloJson(request, respose) {
	respose.json({ message: 'Hello there!' });
}

function push(request, respose) {
	var data = request.body;
	respose.send('Received push request with json: ' + JSON.stringify(data));
}


router.use(common);
router.get('/hello', hello);
router.get('/hello-json', helloJson);
router.post('/push', push);

module.exports = router;
