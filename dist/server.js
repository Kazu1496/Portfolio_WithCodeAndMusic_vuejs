var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');

app.use(history());

app.use(express.static(__dirname));

app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), () => {
console.log('Derp is running at localhost: 4000');
});
