var fs = require('fs');

var filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString(); // convert to a string

console.log(contents.split('\n').length - 1); // split at each line break, count th eline breaks, subtract 1, then print that number