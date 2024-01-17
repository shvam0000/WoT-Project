from flask import Flask, request, jsonify

app = Flask(__name__)

smart_light = {
    "status": "OFF"
}

@app.route('/control-light', methods=['POST'])
def control_light():
    data = request.json
    action = data.get('action')

    if action == 'ON':
        smart_light['status'] = 'ON'
    elif action == 'OFF':
        smart_light['status'] = 'OFF'

    return jsonify({"status": smart_light['status']})

# WoT Description Endpoint
@app.route('/wot-description', methods=['GET'])
def get_wot_description():
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
    return jsonify(wot_description)

if __name__ == '__main__':
    app.run(debug=True)
