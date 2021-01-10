let express = require('express')
, http = require('http');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req,res,next){
    console.log('1st middleware');

    let userAgent = req.header('User-Agent');
    let paramName = req.query.name;

    res.writeHead(200, {'Content-type':'text/html;charset=utf8'});
    res.write('User agent: ' + userAgent + ' paramName: ' + paramName);
    res.end();
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('서버 작동 중')
})