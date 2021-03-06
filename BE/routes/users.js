const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcript = require("bcryptjs");

// Register Handle
router.post("/register", async (req, res) => {
  try {
    const { email, name, password } = req.body;
    User.findOne({ email: email }).then(user => {
      if (user) {
        req.flash('Success_msg');
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
        bcript.genSalt(10, (err, salt) => {
          bcript.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                res.json(user);
              })
              .catch(user => console.log(err));
          });
        });
      }
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
