const fs = require('fs');

// Rename File Name

fs.rename('Demo1.txt', 'Demo2.txt', function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successful");
    }
});
