let http = require('http');

// 웹 서버 객체를 만듭니다.
let server = http.createServer();

// 웹 서버를 시작하여 192.168.0.5 IP와 3000번 포트에서 대기하도록 설정합니다.
let port = 3000;
let host = '192.168.219.113';
server.listen(port, host, '50000', function() {
    console.log('웹 서버가 시작되었습니다. : %s, %d', host, port); // listen 메소드가 호출되면 웹서버가 시작, 두번째 파라미터 함수는 서버 시작되면 호출된다.
});

// 내 pc의 ip는 cmd에 ipconfig/all 치면, 무선 LAN 어댑터 Wi-Fi 항목 아래에 있는 IPv4 주소가 PC의 IP가 된다.