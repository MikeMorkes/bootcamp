var path = require('path');

var mymodule = require('./mymodule.js');

var fileName = process.argv[2];

var fileExt = process.argv[3];
    
function callbackFunction(err, list){
	if (err) {
		console.log('threw an error');
	} else {
		list.forEach(function(file) {
			console.log(file); // use forEach with an anonymous function that prints each item in the array to the console
		})
	}
}    
    

mymodule(fileName, fileExt, callbackFunction);