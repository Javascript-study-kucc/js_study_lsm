let express = require('express')
, http = require('http')
, path = require('path')
, fs = require('fs')

let bodyParser = require('body-parser')
, static = require('serve-static');
const { runInNewContext } = require('vm');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use('/public', static(path.join(__dirname, 'public')));

app.use('/exist', static(path.join(__dirname, 'exist')));

// 미들웨어에서 파라미터 확인
app.use(function(req, res, next){
    console.log('첫번째 미들웨어 요청 처리함');
    
    let paramid = req.body.id || req.query.id;
    
    res.writeHead('200', {'Content-type':'text/html;charset=utf8'});
    res.write(paramid)
    res.end();
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('웹 서버 가동중')
});