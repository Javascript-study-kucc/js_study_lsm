const { fstat } = require('fs');
let http = require('http');
let fs = require('fs')

// 웹 서버 객체를 만든다.
let server = http.createServer();

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


// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');

    let filename='house.png';
    fs.readFile(filename, function(err, data) { //파일을 모두 읽으면 콜백 함수 안의 data 객체로 파일 내용 전달.
    res.writeHead(200, {"Content-Type":"image/png"});
    res.write(data);
    res.end();
    });
});
    
// 서버 종료 이벤트 처리
server.on('close', function() {
    console.log('서버가 종료됩니다.');
});
