const request = require("request");
//mapbox API
const MAPBOX_API_KEY ='pk.eyJ1Ijoic2Fpa2lyYW4wOCIsImEiOiJja2Jhc3VhYmwwOXFjMnFuMTVnN3JjejVxIn0.vJTDCa0ncMCVHqlR2oBCbQ'
const city = 'Hyderabad'
const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?access_token='+MAPBOX_API_KEY+'&limit=1'
request({url:url1,json:true},(err,response,body) =>{
  // console.log(body);
  console.log("place:",body.features[0].place_name,". Longitude=",body.features[0].center[0],"latitude =",body.features[0].center[1])
})













//openweathermap API
// const API_KEY ='cb5ccd32a962f8b70c25d526ae8f1e1c'
// const url = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=17.3850&lon=78.4867&exclude=hourly,minutely&appid='+API_KEY
// var options = {
//   url: url,
//   json:true
// };

// request(options,  (error, response,body) => {
//     if (error) throw new Error(error);
//     console.log(body);
//     const data=body;
//     // console.log(data)
//     console.log(data.current.weather[0].description+'. It is currently '+data.current.temp,'C')
//     // console.log("Max temp: "+data.max_temp+". Min temp: "+data.min_temp)
// });