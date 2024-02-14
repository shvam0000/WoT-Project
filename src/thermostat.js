
class Thermostat {

    constructor(thing){
        
        this.thing = thing
        setInterval(() => {
            var curTemp = this.getTemperature();
            console.log("current temperature is ", curTemp)
            thing.writeProperty("temperature", curTemp)
            if (curTemp > 10) {
                thing.emitEvent("overheat")
                console.log("overheat")
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
            this.changeTemperature(logic.getTemperature() + value)
        });

        thing.setActionHandler("decrement", function (value, options) {
            this.changeTemperature(logic.getTemperature() - value)
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

module.exports = Thermostat