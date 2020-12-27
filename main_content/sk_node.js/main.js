let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function(request,response){
    let _url = request.url;
    let queryData=url.parse(_url, true).query;
    let title=queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
  var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
      console.log(description)
      response.end(template);
    })


});
app.listen(3000);

//URL
//http://opentutorials.org:3000/main?id=HTML&page=12
//http는 protocol: 사용자가 서버에 접근할 때의 통신 방식을 말한다.
//opentutorials.org는 host: 인터넷에 접속되어있는 컴퓨터 주소
//3000은 port: 3000번 port에 연결되어 있는 서버와 통신한다.
//main은 path: 컴퓨터 디렉토리 내의 어떤 파일인지를 가리킴
//id=HTML&page=12은 querystring