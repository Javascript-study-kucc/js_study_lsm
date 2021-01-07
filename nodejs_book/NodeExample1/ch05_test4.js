let http = require('http');

// 웹 서버 객체를 만든다.
let server = http.createServer(function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.')
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    res.write("<!DOCTYPE html> <html><head><title>서버 응답페이지</title></head> <body><h1>안녕하세요?</h1><body></html>");
    res.end();
});

// 웸 서버를 시작하여 3000번 포트에서 대기하도록 설정한다.
let port = 3000;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
    let addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
});
    
// 서버 종료 이벤트 처리
server.on('close', function() {
    console.log('서버가 종료됩니다.');
});