const fs = require('fs');

// Read the data from file
fs.readFile('Demo1.txt', 'utf-8', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("Successful");
    }
});
