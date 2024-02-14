const Thermostat = require("./thermostat")
const TDbase = require("./td")

WoT.produce(TDbase)
  .then(function (thing) {
    console.log("Produced " + thing.getThingDescription().title);
    
    const logic = new Thermostat(thing)
    thing.expose()
});