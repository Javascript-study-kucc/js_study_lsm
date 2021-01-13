let express = require('express')
, http = require('http');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req,res,next){
    console.log('first middlewate request process');

    req.user='mike';
    next();
});

app.use('/', function(req,res,next){
    console.log('seconde middleware request process');
    
    res.writeHead('200', {'Content-type':'text/html;charset=utf8'});
    res.write(req.user + '의 응답결과');
    res.end()
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('express 서버 가동 중');
});