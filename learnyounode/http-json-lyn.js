var http = require('http'); // require the http module
var url = require('url'); // require the url module

    function parsetime (time) { // this creates an ISO format time stamp
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      };
    }

    function unixtime (time) { // this creates an unix format time stamp
      return { unixtime : time.getTime() };
    }

    var server = http.createServer(function (req, res) { // create the http server
      var parsedUrl = url.parse(req.url, true); // url.parse takes a URL string and converts it to a URL object. In this case, taking the request URL string
      var time = new Date(parsedUrl.query.iso); // grabs the current date and time when a GET request is made, based on parsedURL + query becomes ? + iso is the key with the date info for the URL, so: /api/parsetime?iso=2013-08-10T12:10:15.474Z 
      var result;

      if (/^\/api\/parsetime/.test(req.url)) // if the parsed URL is parse time, make result  parsetime(time) - /^\/api\/parsetime/ is regex for /api/parsetime
        result = parsetime(time);
      else if (/^\/api\/unixtime/.test(req.url)) // else if the parsed URL is unix time, make result  unixtime(time) - /^\/api\/unixtime/ is regex for /api/unixtime
        result = unixtime(time);

      if (result) { // if the GET returns JSON 
        res.writeHead(200, { 'Content-Type': 'application/json' }); // be a good citizen and write the 200 server code and data type - in this case, json
        res.end(JSON.stringify(result)); // end the request and print the stringified version of the received JSON
      } else {
        res.writeHead(404); // if they don't find JSON, return a 404 error page and end
        res.end();
      }
    })
    
    server.listen(Number(process.argv[2])); // server listens on port set by node request, converted to a number