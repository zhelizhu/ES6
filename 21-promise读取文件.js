const fs = require('fs')

const promise=new Promise(function(res,rej){

    fs.readFile('./public/1.txt',function(err,data){
        if(err){
            rej(err)
        }
        else{
            res(data)
        }
    })
    
}).then(function(value){

    console.log(value.toString());

},function(reason){

    console.log("读取失败："+reason);

})