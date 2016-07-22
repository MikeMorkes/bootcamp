var http = require('http');

var bl = require('bl'); 

var theURL = process.argv[2];
var theURL2 = process.argv[3];
var theURL3 = process.argv[4];


function getOne(callback) {
	http.get(theURL, function(res) {
		res.setEncoding('utf8');
		res.pipe(bl(function (err, data) { 
			if (err) {
				console.log('error')
			} else {
			console.log(data.toString());
			}
		}))	
		callback(getThree);		
	});

}

function getTwo(callback) {
	http.get(theURL2, function(res) {
		res.setEncoding('utf8');
		res.pipe(bl(function (err, data2) { 
			if (err) {
				console.log('error')
			} else {
			console.log(data2.toString());		
			}
		}))	
		callback();
	});
}

function getThree(callback) {
	http.get(theURL3, function(res) {
		res.setEncoding('utf8');
		res.pipe(bl(function (err, data3) { 
			if (err) {
				console.log('error')
			} else {
			console.log(data3.toString());			
			}
		}))	
	});
}

getOne(getTwo, getThree);