const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: String,
  street: String,
  city: String,
  state: String,
  zipCode: Number,
  occupation: String,
});

module.exports = mongoose.model("Contact", contactSchema);
