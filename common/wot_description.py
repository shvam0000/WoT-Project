wot_description = {
        "@context": "https://www.w3.org/2019/wot/td/v1",
        "@type": "Thing",
        "title": "Smart Light",
        "properties": {
            "status": {
                "type": "string",
                "readOnly": True,
                "description": "Current status of the smart light (ON/OFF)."
            }
        },
        "actions": {
            "control": {
                "description": "Control the smart light.",
                "input": {
                    "type": "object",
                    "properties": {
                        "action": {
                            "type": "string",
                            "enum": ["ON", "OFF"]
                        }
                    },
                    "required": ["action"]
                }
            }
        }
    }