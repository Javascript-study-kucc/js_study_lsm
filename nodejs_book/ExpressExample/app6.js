let express = require('express'), http = require('http')
let app = express();
//let static = require('serve-static');
//let path = require('path');

// app.use('/public', static(path.join(__dirname, 'public'))); use 메소드의 첫번째 파라미터로 요청 패스를 지정, 두 번째 파라미터 static() 함수로 폴더 지정. 서로 매핑.

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');

    let userAgent = req.header('User-Agent');
    let paramName = req.query.name;

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>User-Agent : ' + userAgent + '</p></div>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
});

http.createServer(app).listen(3000, function() {
    console.log('Express 서버가 3000번 포트에서 시작됨.')
})


