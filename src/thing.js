// const Thermostat = require("./thermostat")
// const TDbase = require("./_td")

// WoT.produce(TDbase)
//   .then(function (thing) {
//     console.log("Produced " + thing.getThingDescription().title);
    
//     const logic = new Thermostat(thing)
//     thing.expose()
// });

import td from "./td.json";

WoT.produce(td).then((thing) => {
  thing.setPropertyReadHandler("hello", async() => {
    return "Hello World";
  })

  thing.expose();
})