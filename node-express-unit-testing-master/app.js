//Load express module with `require` directive
var express = require('express')
var app = express();

var Tasks = require('./routes/Tasks');

app.use('/Tasks', Tasks);

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
  res.send('Hello test')
})
app.get('/check', function (req, res) {
  res.send({
    a: 1,
    b: 2
  })
})
//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})