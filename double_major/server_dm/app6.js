let express = require('express')
, http = require('http');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req,res,next){
    console.log('1st middleware');
    
    res.redirect('http://www.google.co.kr');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('서버 작동 중')
})