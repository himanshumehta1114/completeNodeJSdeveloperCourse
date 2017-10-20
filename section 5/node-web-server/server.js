var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  // response.send('<h1>hello Express!</h1>');
  response.send({
    name : 'Himanshu Mehta',
    age: 20,
    skills : [
      'C++',
      'HTML',
      'CSS',
      'JAVASCRIPT'
    ]
  });
});

app.get('/about', (request,response) => {
  response.send('About Page');
});

app.get('/bad', (request,response) => {
  response.send({errorMessage : 'Unable to handle request'});
});

app.listen(3000);
