var http = require('http');

var bl = require('bl'); 

var theURL = process.argv[2];

http.get(theURL, function(res) {
	// consume response body
	res.setEncoding('utf8');
	res.pipe(bl(function (err, data) { 
		if (err) {
			console.log('error')
		} else {
		console.log(data.length);
		console.log(data.toString());
		}
	}))
  	
});
