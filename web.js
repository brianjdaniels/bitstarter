var express = require('express');
var fs = require('fs');
//var path = require('path');

var app = express.createServer(express.logger());
//app.use(express.static(path.join(__dirname, 'public')));
var html = fs.readFileSync('index.html').toString();
//var quiz = fs.readFileSync('../quiz/myQuiz.html').toString();

app.get('/', function(request, response) {
  response.send(html);
});

/*app.get('/quiz', function(request, response) {
  response.send(quiz);
});*/

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
