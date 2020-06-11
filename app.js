const request = require("request");
const geocode = require("./utils/geocode")
const weatherapi = require("./utils/weatherapi")


geocode('Bengaluru',(error,data)=>{
  if (error){
    console.log(error)
  }
  else {
  console.log(data)
  weatherapi(data.latitude,data.longitude,(error,data)=>{
    if (error){
      console.log(error)
    }
    else {
      console.log(data.description,'. It is currently '+data.temp,'C','Todays max: '+data.maxtemp,'and Todays min: '+data.mintemp)
    }
  })
  }
})

