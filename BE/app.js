const express = require('express');
const app = express();
const mongo = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const listRouter = require('./routes/list');

// Connect MongoDb
mongo.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongo.connection;
if (!db) {
    console.log("There Is No Data");
} else {
    console.log("MongoDb Is Connecting");
}

// MiddleWare

app.use(cors());
app.use(bodyParser.json());
app.use('/list', listRouter);

// Routes
app.get('/', (req, res) => {
    res.send('We Are In Home');
});

app.listen(3000, () => {
    console.log('Server Is Listening On http://localhost:3000/');
});