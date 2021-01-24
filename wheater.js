const axios = require("axios");
//otra forma
const getWheater = async (city, lat, long) => {
  const resp = await axios("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      lat: lat,
      lon: long,
      appid: process.env.API_WEATHER,
      units: "metric",
    },
  });
  return resp.data.main.temp;
};

module.exports = { getWheater };
