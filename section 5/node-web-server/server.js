var express = require('express');

var app = express();

app.get('/', (request, response) => {
  response.send('hello Express!');
});

app.listen(3000);
