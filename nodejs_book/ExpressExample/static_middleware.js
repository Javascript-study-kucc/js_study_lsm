let static = require('serve-static');

app.use('/public', static(path.join(__dirname, 'public')));