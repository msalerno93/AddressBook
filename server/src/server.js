const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./Models/contactModel")
const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT;
const connectionString = process.env.MONGOOSE_URL

mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const people = [
  { name: "John", industry: "Tech" },
  { name: "Jessica", industry: "Hairstylist" },
  { name: "Matt", industry: "Sports" },
];

const contact = new Contact({
  firstName: "John",
  lastName: "Jacobson",
  phoneNumber: "555-555-5555",
  email: "john@email.com",
  street: "123 Fake Street",
  city: "New York",
  state: "NY",
  zipCode: "11111",
  occupation: "Software Engineer"
})

//HOMEPAGE GET - returns Welcome Home on page
app.get("/", (req, res) => res.send(contact));

//GET REQ for CONTACTS - Returns all contacts
app.get("/api/contacts", (req, res) => res.send({ "Peoples Data": people }));

//HOMEPAGE POST - Dummy POST req
app.post("/", (req, res) => res.send("This is POST requesssst"));

//POST REQ for individual contact
app.post("/api/contacts", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

const startServer = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");

    app.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

startServer()