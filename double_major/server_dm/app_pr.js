let express = require('express')
, http = require('http');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
    console.log('첫 번째 미들웨어 요청을 처리');

    res.writeHead(200, {'Content-type':'text/html;charset=utf8'});
    res.write('<h1>express 서버에서 응답한 결과입니다.</h1>');
    res.end();
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express 서버가 3000번 포트에서 시작된다.');
});