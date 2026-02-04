const fs = require('fs');

// To delete any file

fs.unlink('Demo2.txt', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("Successfil")
    }
});