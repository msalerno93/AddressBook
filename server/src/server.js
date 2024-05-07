const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./Models/contactModel");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const connectionString = process.env.MONGOOSE_URL;


mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// const people = [
//   { name: "John", industry: "Tech" },
//   { name: "Jessica", industry: "Hairstylist" },
//   { name: "Matt", industry: "Sports" },
// ];

// const contact = new Contact({
//   firstName: "John",
//   lastName: "Jacobson",
//   phoneNumber: "555-555-5555",
//   email: "john@email.com",
//   street: "123 Fake Street",
//   city: "New York",
//   state: "NY",
//   zipCode: "11111",
//   occupation: "Software Engineer",
// });

                  // GET REQUESTS

//HOMEPAGE GET - returns Welcome Home on page
app.get("/", (req, res) => res.send("Welcome Home!"));

// GET SINGULAR CONTACT - returns one contact by their ID
app.get("/api/contacts/:id", async (req, res) => {
  try {
    const contactId = req.params.id;
    const contact = await Contact.findById(contactId);
    if (!contact) {
      res.status(404).json({ error: "User not found" });
    }else{
      res.json({contact})
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

//GET REQ for CONTACTS - Returns all contacts
app.get("/api/contacts", async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ contacts: result });
  } catch (error) {
    res.status(500).json({ error: "There was an error that occured" });
  }
});

                    // POST REQUESTS

//HOMEPAGE POST - Dummy POST req
app.post("/", (req, res) => res.send("This is POST requesssst"));

//POST REQ for individual contact
app.post("/api/contacts", async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.status(201).json({ contact });
  } catch (error) {
    res.status(400).json({ error: "Unable to create Contact" });
  }
});


                        //PUT REQUESTS

// PUT req for individual contact - edit contact info
app.put("/api/contacts/:id", async (req, res) => {
  try {
    const contactId = req.params.id
    const result = await Contact.replaceOne({_id: contactId}, req.body)
    res.json({updatedCount: result.modifiedCount})
  } catch (error) {
    res.status(500).json({error: "Something went wrong!"})
  }
})


                          //DELETE REQUEST
  
  // Delete Req - deletes contact

  app.delete("/api/contacts/:id", async (req, res) => {
    try {
      const contactId = req.params.id
      const result = await Contact.deleteOne({_id: contactId})
      res.json({deletedCount: result.deletedCount})
    } catch (error) {
      res.status(500).json({error: "Something went wrong deleting contact"})
    }
  })

// Start server async function - connects to mongodb

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

startServer();
