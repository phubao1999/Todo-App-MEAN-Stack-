const express = require('express');
const app = express();
const mongo = require('mongoose');

app.get('/', (req, res) => {
    res.send('We Are In Home');
});

app.listen(3000, () => {
    console.log('Server Is Listening On http://localhost:3000/');
});