let express = require('express')
, http = require('http');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어 요청 처리');

    res.writeHead('200', {'Content-type':'text/html;charset=utf8'});
    res.end('express 서버에서 응답한 결과입니다.')
})

http.createServer(app).listen(app.get('port'), function() {
    console.log('express 서버 시작 ' + app.get('port'));
});
