const request = require("request");
const geocode = require("./utils/geocode")
const forecast = require("./utils/weatherapi")


geocode('Hyderabad',(error,data)=>{
  if (error){
    console.log(error)
  }
  else {
  console.log(data)
  forecast(data.latitude,data.longitude,(error,data)=>{
    if (error){
      console.log(error)
    }
    else {
      console.log(data.description,'. It is currently '+data.temp,'C','Todays max: '+data.maxtemp,'and Todays min: '+data.mintemp)
    }
  })
  }
})

