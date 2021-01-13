let express = require('express')
, http = require('http')
, path = require('path');

let bodyParser = require('body-parser')
, static = require('serve-static');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: false})); // body-parser 모듈을 불러옴.

app.use(bodyParser.json());

app.use('/public',static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    console.log('첫 번째 미들웨어에서 요청을 처리함')

    let paramId = req.body.id || req.query.id
    let paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-type':'text/html;charset=utf8'});
    res.write('paramid: ' + paramId +'<br>');
    res.write('password: ' + paramPassword);
    res.end();
});

http.createServer(app).listen(app.get('port'),function(){
    console.log('서버 가동 중')
})