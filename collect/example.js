function first(callback, cb){
    console.log("First");
    callback();
    cb();
}

function second(callback){
    console.log("Second");
}


function third(callback){
    console.log("Third");
}

// Let's run it!

first(second, third);