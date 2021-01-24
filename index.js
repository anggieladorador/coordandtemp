require("dotenv").config();

const places = require("./places");
const wheater = require("./wheater");
const argv = require("yargs").options({
  city: {
    alias: "c",
    desc: "para obtener la temperatura de una ciudad",
    demand: true,
  },
}).argv;

getInfo(argv.city);
async function getInfo(city) {
  const result = await places.getCoordinates(city);

  const resp = await wheater.getWheater(result.city, result.lat, result.lng);
  return console.log(
    `la temperatura es ${resp} grados en la ciudad de ${city}`
  );
}
