const express = require("express");
const router = express.Router();
const User = require('../models/User');

// Login Page
router.get("/login", (req, res) => {
  res.send("Login");
});

// Register Page
router.get("/register", (req, res) => {
  res.send("Register");
});

// Register Handle
router.post("/register", async (req, res) => {
  const { email, name, password, password2 } = req.body;
  console.log(email, name, password, password2);
});

module.exports = router;
