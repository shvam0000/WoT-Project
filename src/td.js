module.exports = {
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
}