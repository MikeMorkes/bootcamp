var dataFeed = process.argv[2];

fs.readFile(dataFeed, readFileCallback);

function readFileCallback (err, data) {

    if (err) {
        console.log("Unable to read file.");
    } else {
    	var contents = data.toString();
		  console.log(contents.split('\n').length - 1);
    }

};