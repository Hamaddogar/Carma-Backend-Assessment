
const express = require('express');
const path = require("path");
const client = require('./models/database.js')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const actorDataSkelton = require('./models/actorDataModel');
// useage
app.use(cors());
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));
const publicKey = 'pk_test_51KDF8oCBbduDchXTO6o9IMRzTQNHX2JLeW8DMIv70nHVzf0dQ6WLRVaarhvWtks2OQXu7yJlvkEolaZKdgeSOPMY00flGhH640';
const secretKey = 'sk_test_51KDF8oCBbduDchXTYrqTFFQHleMb1EqjjTv30NKarVetWsVmmsCkJmFU4ujORW99QI97jVPbkuylQUbTw5inkSGy00qJHeWh6l';
const stripe = require('stripe')(secretKey)
// ------------------------.ENV CONFIG ------------------//
const PORT = process.env.PORT || 8080;


client.connect();


// Crediantials Saver Route
app.post('/crediantialssaver', async (req, res) => {
    const user = req.body.body.token.card;
    console.log(user)
    let insertQuery = `insert into users( id,brand,country,dynamic_last4,exp_month,exp_year,last4,name) 
 values('${user.id}', '${user.brand}', '${user.country}','${user.dynamic_last4}', ${user.exp_month} ,${user.exp_year},'${user.last4}', '${user.name}')`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send({ success: true, message: 'Information Saved Successful' });
        }
        else {
            res.send({ success: false, message: 'Oops !' });
            console.log(err.message)
        }
    })
    client.end;
})





// -------------Server with POSTGRESQL----------------- //


// default data
app.get('/data', async (req, res) => {
    try {
        const getAllDataQuery = `select * from users`;
        client.query(getAllDataQuery, (err, result) => {
            if (!err) {
                res.send({ success: true, message: 'Data Fetched Successful', data: result.rows });
            }
            else {
                res.send({ success: false, message: 'Oops !' });
                console.log(err.message)
            }
        }
        )

    } catch (error) {
        res.send({ success: true, message: error.message });
    }
})





// PAYMENT
app.post('/payment', (request, response) => {
    const { product, token } = request.body;
    console.log('request.token', token);
    const clientData = {
        brand: token.card.brand,
        last4: token.card.last4,
        exp_month: token.card.exp_month,
        exp_year: token.card.exp_year,
        country: token.card.country,
        currency: token.card.currency,
        funding: token.card.funding,
        email: token.email,
    }
    response.send('Post Route is working')

})


if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}
// app.listen(8080 || process.env.PORT)
app.listen(PORT, () => { console.log('server is running'); })