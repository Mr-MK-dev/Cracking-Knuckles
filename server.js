const app = require('./app');
require('dotenv').config({});
port = process.env.PORT || 3030;
const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD))
    .then(() => {
        console.log(`DATABASE CONNECTED`);
    })
    .catch((err) => {
        console.log(`HOLDON 💥💥 ${err}`);
    });

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
