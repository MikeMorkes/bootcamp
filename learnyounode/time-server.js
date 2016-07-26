var net = require('net');

var server = net.createServer(function(socket) {
	socket.end(fullDate + "\n");
});  

server.listen(Number(process.argv[2]));

    var theDate = new Date();
    
    var year = theDate.getFullYear();
    var month = theDate.getMonth() + 1;
    if (month < 10) {
    	month = "0" + month.toString();
    }
    var day = theDate.getDate();
    if (day < 10) {
    	day = "0" + day.toString();
    }
    var hour = theDate.getHours();
    if (hour < 10) {
    	hour = "0" + hour.toString();
    }    
    var minutes = theDate.getMinutes();
    if (minutes < 10) {
    	minutes = "0" + minutes.toString();
    }    
    var fullDate =  year + "-" + month + "-" + day + " " + hour + ":" + minutes;    
