const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcript = require("bcryptjs");

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
  User.findOne({ email: email }).then(user => {
    if (user) {
      res.json({
        msg: "User Email Is Exists"
      });
    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password
      });
      // Hash Password
      bcript.genSalt(10, (err, salt) =>
        bcript.hash(newUser.password, salt, (err, hash) => {
          // Set password to hash
          newUser.password = hash;
          // Save User
          newUser.save()
            .then(res.json({
              newUser
            }))
            .catch(err => console.log(err));
        })
      );
    }
  });
});

module.exports = router;
