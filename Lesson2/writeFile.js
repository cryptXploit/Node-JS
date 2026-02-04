const fs = require('fs');

fs.writeFile('Demo1.txt', "This is a sample Text", function(err) {
    if(err){
        console.log(err);
    }else{
        console.log("Successful");
    }
});
