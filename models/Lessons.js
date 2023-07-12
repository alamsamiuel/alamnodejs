const mongoose = require("mongoose");

const lessonsSchema = mongoose.Schema({
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

var Lessons = mongoose.model("Lessons", lessonsSchema);
module.exports = Lessons;
