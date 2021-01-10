// Express 기본 모듈 불러오기
let express = require('express')
, http = require('http');

// 익스프레스 객체 생성
let app = express(); 

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000); // process.env 객체에 PORT 속성이 있으면 ㅣ그 속성을 사용하고, 없으면 3000 포트 번호를 사용.

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){ // 웹 서버 객체를 만들고, listen 메소드를 호출해서 클라이언트의 요청을 대기
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'));
});