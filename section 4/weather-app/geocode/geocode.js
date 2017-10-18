const request = require('request');

var getAddress = (search,callback) => {
  var encoded = encodeURIComponent(search);
  request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`,
      json: true
    }, (error,response,body)=>{
      if(error){
        callback('Unable to connect to google servers');
      }else if(body.status === 'ZERO_RESULTS'){
        callback('unable to find that address');
      }else if(body.status === 'OK'){
      // here body refers to body of jSON page ie. all information being displayed on browser in json
      callback(undefined,{
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
    }
  );
};

module.exports = {
  getAddress
};
