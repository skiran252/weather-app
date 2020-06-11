const request = require("request");
const geocode = require("./utils/geocode")
const forecast = require("./utils/weatherapi")


geocode('Bengaluru',(error,coordinates)=>{
  if (error){
    return console.log(error)
  }
  else {
  forecast(coordinates.latitude,coordinates.longitude,(error,data)=>{
    if (error){
      return console.log(error)
    }
    else {
      console.log('Place:',coordinates.location)
      return console.log(data.description,'. It is currently '+data.temp,'C','Todays max: '+data.maxtemp,'and Todays min: '+data.mintemp)
    }
  })
  }
})

