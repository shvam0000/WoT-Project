const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Temp = require('./temp.model')
const dotenv = require('dotenv');
dotenv.config();

const Thermostat = require('./src/thermostat');

const app = express();

app.use(cors())
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/healthcheck', (req, res) => {
    res.status(200).json({message: 'API works'})
})

function getTemperature() {
    return Math.random() * Math.floor(50);
}

app.post('/temp', async (req, res) => {
    try {
        const curTemp = await getTemperature(); 
        if (curTemp !== null) {
            const _temp = new Temp({
                _id: new mongoose.Types.ObjectId(),
                temp: curTemp
            });

            await _temp.save(); 

            console.log('New temperature saved:', curTemp);
            res.status(201).json({ message: 'New Temp Added', currentAddedTemp: curTemp });
        } else {
            res.status(404).json({ error: 'No Current Temp Available' });
        }
    } catch (error) {
        console.error('Error saving temperature:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`[INFO] Server started and listening on PORT ${PORT}`)
})