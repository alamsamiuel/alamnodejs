const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  subject: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  space: {
    required: true,
    type: String,
  },
});

var orders = mongoose.model("orders", ordersSchema);
module.exports = orders;
