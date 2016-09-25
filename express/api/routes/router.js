var express = require("express");
var router = express.Router();

// middleware to use for all requests
router.use(function(request, respose, next) {
	console.log("request received!");
	next();
});

router.get("/hello", function(request, respose) {
	respose.send("Hello there!");
});

module.exports = router;
