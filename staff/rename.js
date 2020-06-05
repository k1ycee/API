const fs = require('fs');

fs.readFile('tobeR.txt', 'utf8', function(err,data){
    fs.writeFile('created.txt', data, function(err, data){
        if(err){console.log('error', err)};
    });
});

fs.unlink('created.txt', function(err){
    if(err){console.log('error', err)};
});

fs.mkdir('mad', function(err){
    if(err){
        console.log('error', err)
    }
    else{
        fs.writeFile('mad/created.txt', 'jfjivsbviovnjiviskjfjsjckjskjvksjlkvlmls', function(err){
            if(err){console.log('error', err)};
        });
    }
});