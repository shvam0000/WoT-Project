'use strict';

var title = "Amazon Echo Simulator";
var securityDefinitions = {
	no_sec: {
		scheme: "nosec"
	}
};
var security = "no_sec";
var properties = {
	hello: {
		type: "string",
		title: "greetings",
		description: "It says hello"
	}
};
var events = {
};
var actions = {
};
var td = {
	"@context": [
	"https://www.w3.org/2019/wot/td/v1"
],
	"@type": [
	"Thing"
],
	title: title,
	securityDefinitions: securityDefinitions,
	security: security,
	properties: properties,
	events: events,
	actions: actions
};

// const Thermostat = require("./thermostat")

WoT.produce(td).then((thing) => {
  thing.setPropertyReadHandler("hello", async() => {
    return "Hello World";
  });

  thing.expose();
});
//# sourceMappingURL=bundle.js.map
