const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  // response.send('<h1>hello Express!</h1>');
  // response.send({
  //   name : 'Himanshu Mehta',
  //   age: 20,
  //   skills : [
  //     'C++',
  //     'HTML',
  //     'CSS',
  //     'JAVASCRIPT'
  //   ]
  // });
  response.render('home.hbs', {
    welcomeMessage : 'Welcome to home page',
    title: 'Home Page',
    year: new Date().getFullYear(),
    name: 'Himanshu Mehta',
    skills: '[c++,html,css,javascript]'
  });
});

app.get('/about', (request,response) => {
  // response.send('About Page');
  response.render('about.hbs', {
    pageTitle : 'ABout page',
    year : new Date().getFullYear()
  });
});

app.get('/bad', (request,response) => {
  response.send({errorMessage : 'Unable to handle request'});
});

app.listen(3000);
