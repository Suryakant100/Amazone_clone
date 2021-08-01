const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JJDMuSF2ruM6XVw2fBdch6ziRlNkm2TlovKJaoSsxwy3TGHv9iSOrVA2sEXKxCj7E91H7K7d4FDIlAsnRDFr74500WRtGSjN9"
);
const client_serect =
  "sk_test_51JJDMuSF2ruM6XVw2fBdch6ziRlNkm2TlovKJaoSsxwy3TGHv9iSOrVA2sEXKxCj7E91H7K7d4FDIlAsnRDFr74500WRtGSjN9";

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment recived of amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  res.status(201).send({
    clientSecret: client_serect,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/full-stack-e-clone/us-central1/api
