// 웹 서버 객체를 만듭니다.
let http=require('http')
let server=http.createServer()

let port=3000;
let host=23.45

server.listen(port, host, '50000', function () {
    console.log('')
})

server.on('connection', function (socket) {
    let addr=socket.address()
    console.log('안녕하세요? %d, %s', addr.address, addr.port)
})

server.on('request', function (req, res){
    console.log('요청이 들어왔습니다.')
})

server.on('close', () => {
    console.log('서버 종료')
})

// 웹 서버를 시작하여 192.168.0.5 IP와 3000번 포트에서 대기하도록 설정합니다.



// 내 pc의 ip는 cmd에 ipconfig/all 치면, 무선 LAN 어댑터 Wi-Fi 항목 아래에 있는 IPv4 주소가 PC의 IP가 된다.