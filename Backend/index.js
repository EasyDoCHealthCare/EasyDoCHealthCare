// Create the Server at port 3000
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Body parser for parsing the body of the request
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// For Create to mongodb
const mogoose = require("mongoose");
const { mogoUrl } = require("./keys");
require("./models/User");

// For using the authRoutes for signup
const authRoutes = require("./routes/authRoutes");

// Connecting to mongodb
mogoose.connect(mogoUrl);
mogoose.connection.on("connected", () => {
   console.log("Connected to mogoosedb");
});
mogoose.connection.on("error", (err) => {
   console.log("Error connecting", err.message);
});

// middleware
const requireToken = require("./middleware/requiretoken");

// Calling the app method
app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.post("/", (req, res) => {
   console.log(req.body);
   res.send("Got a POST request");
});

app.use(authRoutes);
app.get("/protected", requireToken, (req, res) => {
   res.send(`Your email is ${req.user.email}`);
});
