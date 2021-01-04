const http = require('http') //서버를 만드는 모듈 불러옴
http.createServer((request, response) => { 
return request
  .on('error', (err) => { //요청에 에러가 있으면
    console.error(err)
  })
  .on('data', (data)=>{ //요청에 데이터가 있으면
    console.log(data);
  })
  .on('end', ()=>{ //요청의 데이터가 모두 받아졌으면
    response.on('error', (err)=>{
      console.error(err);
    });
    response.statusCode=200; //성공 상태 코드
    response.setHeader('Content-Type', 'text/plain'); // header 설정
    //지금 보내는 컨텐츠의 유형을 평문 텍스트(text/plain)으로 설정
    //만약 html 전송 시 text/html하면 된다.
    response.write('hi\n'); // body에 정보 탑재
    response.end('the end!') //정보 탑재 후 브라우저로 전송
  })
}).listen(8080);
  //request는 요청을 담당, 서버로 보내는 요정에 대한 정보가 들어있음.
  //response는 클라이언트(브라우저)로 돌려줄 응답을 담당, 만약 어떤 정보를 보내고 싶다면 response 활용
  //request -> 서버처리 -> response 로 이어지는 흐름