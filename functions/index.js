const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: true });
const app = express();

const stripe = require("stripe")(functions.config().stripe.token);
// TODO: Remember to set token using >> firebase functions:config:set stripe.token="SECRET_STRIPE_TOKEN_HERE"

app.use(cors);

app.post("/", async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    const { amount, currency } = body;

    const paymentIntent = await stripe.paymentIntents.create({
      payment_method_types: ["card"],
      amount: amount,
      currency: currency
    });
    res.send({
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        message: "Success",
        paymentIntent
      })
    });
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
      })
    });
  }
});

exports.createPaymentIntent = functions.https.onRequest(app);
