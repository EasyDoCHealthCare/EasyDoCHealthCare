import express from "express";
import jwt from "jsonwebtoken";
import Client from "../models/Client.js";

const Route = express.Router();

Route.get("/signup", (req, res) => {
  res.send("sign up pages");
});

Route.post("/signup", async (req, res) => {
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
    const user = new Client({
      clienttype,
      organizationName,
      email,
      phoneNumber,
      username,
      password,
      contactPersonName,
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY);
    res.send({ token: token });
  } catch (err) {
    console.log(err.message);
    return res.status(422).json({ error: err.message });
  }
});

Route.post("/signin", async (req, res) => {
  const { clientType, email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Must provide email or password" });
  }

  const user = await Client.findOne({ email: email });
  if (!user) {
    return res.status(422).json({ error: "Must provide email or password" });
  }

  try {
    await user.comparePassword(password);
    console.log("here : ", clientType, email, password);

    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY);
    res.send({ token: token });
    console.log("Completd Signin ", email, password);
  } catch (err) {
    return res
      .status(422)
      .json({ error: "Must provide Client type or email or password" });
  }
});

export default Route;
