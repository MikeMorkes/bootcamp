var fs = require('fs');
var path = require('path');

module.exports = function (fileName, fileExt, callbackFunction) { 

	fs.readdir(fileName, function(err, list) {
		if (err) { 
		 	return callbackFunction(err);
		} else {
			list = list.filter(function(file) {  // using filter with an anonymous function here which removes any name that doesn't have fileExt
				if (path.extname(file) === "." + fileExt) {
        			return true;
        		}
        	})
        	return callbackFunction(null, list);
		}
	}) //
			
}