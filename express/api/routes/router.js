var express = require('express');
var router = express.Router();

// middleware to use for all requests
router.use(function(request, respose, next) {
	console.log('request received!');
	next();
});

router.get('/hello', function(request, respose) {
	respose.send('Hello there!');
});

router.get('/hello-json', function(request, respose) {
	respose.json({ message: 'Hello there!' });
});

router.post('/push', function(request, respose) {
	var data = request.body;
	respose.send('Received push request with json: ' + JSON.stringify(data));
});

module.exports = router;
