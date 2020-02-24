const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcript = require("bcryptjs");
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) {
        return res.status(400).send('Email does not exists');
    }
    // If password correct
    const validPassword = await bcript.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid Password');

    // Create And  assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);

    res.send('Loggin Success');
});

module.exports = router;