var somePromise = new Promise((resolve,reject) => {
 setTimeout(() => {
// only one statement is execued either resolve or reject
   resolve('Hey it worked');
  //  reject('Unable to fulfill promise');
 },2500);
});

somePromise.then((message) => {
  console.log('message :',message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
