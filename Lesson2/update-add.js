const fs = require('fs');

// If i want to append/ add/ update
fs.appendFile('Demo1.txt', "This is a sample Text", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successful");
    }
});
