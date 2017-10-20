const yargs = require('yargs');
const axios = require('axios');
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

var encodedURI = encodeURIComponent(argv.a);
var geocode = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURI}`;

axios.get(geocode).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address');
  }
  console.log(response.data.results[0].formatted_address);
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/877712e97548129a36678674d3ade8f3/${lat},${lng}`;
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemp = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}.but it feels like ${apparentTemp}`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  }else{
    console.log(e.message);
  }
});
