const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/weatherapi");
const yargs = require("yargs");
const address = yargs.argv.location;
if (!address) {
  return console.log("Please provide a address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(
      latitude,
      longitude,
      (error, { description, temp, maxtemp, mintemp }) => {
        if (error) {
          return console.log(error);
        }
        console.log("Place:", location);
        return console.log(
          description,
          ". It is currently " + temp,
          "C",
          "Todays max: " + maxtemp,
          "and Todays min: " + mintemp
        );
      }
    );
  });
}
