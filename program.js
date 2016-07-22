var fs = require('fs');

var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
    if (err) {
        console.log('threw an error');
    } else {
        for (var a = 0; a < list.length; a++) {
        	var theListItem = list[a];
        	if (path.extname(theListItem) === "." + process.argv[3]) {
        		console.log(theListItem);
        	}
        }
    }
})