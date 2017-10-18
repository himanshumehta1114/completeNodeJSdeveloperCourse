const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/877712e97548129a36678674d3ade8f3/${lat},${long}`,
    json: true
  }, (error,response,body) => {
    if(error){
        callback('Unable to fetch weather');
    }else if(response.statusCode === 400){
      callback('Unable to fetch weather');
    }else if(response.statusCode === 200){
      callback(undefined, {
        temperature : body.currently.temperature,
        apparentTemperature : body.currently.apparentTemperature
      });
    }

  });
}

module.exports = {
  getWeather
};
