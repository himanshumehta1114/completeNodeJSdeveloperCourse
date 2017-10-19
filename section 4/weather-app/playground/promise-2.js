const request = require('request');

var geoCodeAddress = (address) => {
  var encoded = encodeURIComponent(address);
  return new Promise((resolve,reject) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`,
        json: true
      }, (error,response,body)=>{
        if(error){
          reject('Unable to connect to google servers');
        }else if(body.status === 'ZERO_RESULTS'){
          reject('unable to find that address');
        }else if(body.status === 'OK'){
        // here body refers to body of jSON page ie. all information being displayed on browser in json
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
      }
    );
  });
};

geoCodeAddress('125005').then((location) => {
  console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
  console.log(errorMessage);
});
