const axios = require("axios");
const getCoordinates = async (city) => {
  //instancia personalizada
  const encodedCity = encodeURI(city);

  const instance = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedCity}.json?access_token=${process.env.ACCESS_TOKEN}`,
  });

  const result = await instance.get();
  if (result.data.length == 0) {
    throw new Error` no se han encontrado resultados para ${city}`();
  }
  const data = result.data.features[0];
  const lng = data.geometry.coordinates[0];
  const lat = data.geometry.coordinates[1];
  return {
    city,
    lat,
    lng,
  };
};
module.exports = { getCoordinates };
