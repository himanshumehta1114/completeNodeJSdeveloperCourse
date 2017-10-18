var asyncAdd = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else {
        reject('Arguments must be number');
      }
    }, 1500);
  });
};

asyncAdd(5,7).then((res) => {
  console.log('result : ' + res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('result : ' + res);
  return asyncAdd(res, '4');
}).then((res) => {
  console.log('result : ' + res);
}).catch ((errorMessage) => {
  console.log(errorMessage);
});


// var somePromise = new Promise((resolve,reject) => {
//  setTimeout(() => {
// // only one statement is execued either resolve or reject
//    resolve('Hey it worked');
//   //  reject('Unable to fulfill promise');
//  },2500);
// });
//
// somePromise.then((message) => {
//   console.log('message :',message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
