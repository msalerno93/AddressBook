const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  street: String,
  city: String,
  state: String,
  zipCode: Number,
  occupation: String,
});

module.exports = mongoose.model("Contact", contactSchema);
