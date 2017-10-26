const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', ()=> {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})
app.use((req,res,next) => {
  var now = new Date().toString();
  var log = `${now} : ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (error) => {
    if(error){
      console.log('Unable to log files');
    }
  });
  next();
});
// 
// app.use((req,res,next) => {
//   res.render('maintenance');
// });

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
    pageTitle: 'Home Page',
    name: 'Himanshu Mehta',
    skills: '[c++,html,css,javascript]'
  });
});

app.get('/about', (request,response) => {
  // response.send('About Page');
  response.render('about.hbs', {
    pageTitle : 'ABout page',
  });
});

app.get('/bad', (request,response) => {
  response.send({errorMessage : 'Unable to handle request'});
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
