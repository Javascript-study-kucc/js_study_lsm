let express = require('express')
, http = require('http');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
    console.log('first middleware');

    res.send({name:'소녀시대', age:20});
})

http.createServer(app).listen(app.get('port'), function(){
    console.log('서버 작동 중')
})