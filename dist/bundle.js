'use strict';

class Thermostat {

    constructor(thing){
        
        this.thing = thing;
        setInterval(() => {
            var curTemp = this.getTemperature();
            console.log("current temperature is ", curTemp);
            thing.writeProperty("temperature", curTemp);
            if (curTemp > 45) {
                thing.emitEvent("overheat");
            }
        }, 5000);

        // init property values
        thing.writeProperty("temperature", this.getTemperature());

        thing.setPropertyReadHandler("temperature", function () {
            return new Promise((resolve, reject) => {
                resolve(this.getTemperature());
            });
        });

        // set action handlers
        thing.setActionHandler("increment", function (value, options) {
            this.changeTemperature(logic.getTemperature() + value);
        });

        thing.setActionHandler("decrement", function (value, options) {
            this.changeTemperature(logic.getTemperature() - value);
        });
    }

    getTemperature() {
        // normally, you would call the temperature sensor's function to read the actual temperature value
        // return new Promise((resolve, reject) => {
        return Math.random() * Math.floor(50);
        // resolve(5); //uncomment to test incrementing etc.
        //  });
    }

    changeTemperature(newValue) {
        // normally, you would do physical action to change the temperature
        //do nothing
        this.thing.writeProperty("temperature", newValue);
        return;
    }
}

var thermostat = Thermostat;

var td = {
    title: "TemperatureController",
    description: "A Thing to control the temperature of the room and also get alerts in too high temperatures",
    properties: {
        temperature: {
            type: "integer",
            description: "Current temperature value",
            observable: true,
            readOnly: true,
            unit: "Celsius"
        }
    },
    actions: {
        increment: {
            description: "Incrementing the temperature of the room with 0 to 5 increments",
            input: {
                type: "integer",
                minimum: 0,
                maximum: 5
            }
        },
        decrement: {
            description: "Decrementing the temperature of the room with 0 to 5 increments",
            input: {
                type: "integer",
                minimum: 0,
                maximum: 5
            }
        }
    },
    events: {
        overheat: {
            description: "Alert sent when the room temperature is too high"
        }
    }
};
td.title;
td.description;
td.properties;
td.actions;
td.events;

WoT.produce(td)
  .then(function (thing) {
    console.log("Produced " + thing.getThingDescription().title);
    
    new thermostat(thing);
    thing.expose();
});
//# sourceMappingURL=bundle.js.map
