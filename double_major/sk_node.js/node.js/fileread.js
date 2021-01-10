const fs = require('fs'); //fs(file system) module을 불러온다.
fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
}) //sample.txt를 읽는다.

//디렉토리를 cd node.js로 해야한다. 