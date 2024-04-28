const express = require("express");
const app = express();
const port = 3000;

const people = [
  { name: "John", industry: "Tech" },
  { name: "Jessica", industry: "Hairstylist" },
  { name: "Matt", industry: "Sports" },
];

app.get("/", (req, res) => res.send("Welcome Home!"));
app.get("/api/contacts", (req, res) => res.send({"Peoples Data": people}));
app.post("/", (req, res) => res.send("This is POST requesssst"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
