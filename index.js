const express = require("express");
const mongoose = require("mongoose");
const lessonsRout = require("./routes/lessons");
const OrdersRout = require("./routes/order");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;
// middleware to parse json response, request
app.use(express.json());
app.use(morgan('tiny'));

//Set up default mongoose connection
var mongoDB =
  "mongodb+srv://alam:alam@cluster0.skg9cce.mongodb.net/webstore?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(lessonsRout);
app.use(OrdersRout);
app.get("/", (req, res) => {
  res.json({
    Status: 200,
  });
});

app.listen(port, () => {
  console.log(`Backend is working  ${port}`);
});
