const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../keys");

const router = express.Router();
const User = mongoose.model("User");

router.get("/signup", (req, res) => {
  res.send("sign up pages");
});

router.post("/signup", async (req, res) => {
  console.log(req.body);

  const {
    clienttype,
    organizationName,
    email,
    phoneNumber,
    username,
    password,
    contactPersonName,
  } = req.body;

  try {
    const user = new User({
      clienttype,
      organizationName,
      email,
      phoneNumber,
      username,
      password,
      contactPersonName,
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, jwtKey);
    res.send({ token: token });

    // console.log(
    //   "Completd Signup ",
    //   clienttype,
    //   organizationName,
    //   email,
    //   phoneNumber,
    //   username,
    //   password,
    //   contactPersonName
    // );
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({ error: err.message });
  }
});

router.post("/signin", async (req, res) => {
  const { clientType, email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Must provide email or password" });
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(422).json({ error: "Must provide email or password" });
  }

  try {
    await user.comparePassword(password);
    console.log("here : ", clientType, email, password);

    const token = jwt.sign({ userId: user._id }, jwtKey);
    res.send({ token: token });
    console.log("Completd Signin ", email, password);
  } catch (err) {
    return res
      .status(422)
      .json({ error: "Must provide Client type or email or password" });
  }
});

module.exports = router;
