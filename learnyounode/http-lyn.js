var http = require('http');

var theURL = process.argv[2];

http.get(theURL, callback);

function callback (res) {
	// consume response body
	res.setEncoding('utf8');
	res.on("data", function(data) { 
  		console.log(data);
  	});
  	
	res.resume();
	res.on('error', function(e) {
		console.log(`Got error: ${e.message}`);
	});
}