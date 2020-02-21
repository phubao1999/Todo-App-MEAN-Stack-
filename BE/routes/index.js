const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome To Home Page');
});

module.exports = router;