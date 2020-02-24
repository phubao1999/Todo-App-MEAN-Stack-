const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.send('Test login page');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;