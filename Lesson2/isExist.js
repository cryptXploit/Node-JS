const fs = require('fs');


fs.exists('Demo2.txt', (result) =>{
    if(result){
        console.log("Found");
    }else{
        console.log("Not Found")
    }
});