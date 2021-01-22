const request = require("request");
const url = "https://coderbyte.com/api/challenges/json/age-counting";
var options = {
  url: url,
  json: true,
};
request(options, (error, response) => {
  if (error) throw new Error(error);
  const jsonresp = response.body;

  const data = jsonresp.data;
  console.log(data);
});
count = 0;
