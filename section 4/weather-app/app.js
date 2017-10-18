const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

// geocode.getAddress(argv.a, (errorMessage,results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   }else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

weather.getWeather(29.136086,75.74104100000001, (errorMsg, temp) => {
  if(errorMsg){
    console.log(errorMsg);
  }else{
    console.log(temp);
  }
});

// request({
//   url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURI}`,
//   json: true
// }, (error,response,body)=>{
//   if(error){
//     console.log('Unable to connect to google servers');
//   }else if(body.status === 'ZERO_RESULTS'){
//     console.log('unable to find that address');
//   }else if(body.status === 'OK'){
//   // here body refers to body of jSON page ie. all information being displayed on browser in json
//   console.log(`Address: ${body.results[0].formatted_address}`);
//   console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
//   console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
// }
// });
