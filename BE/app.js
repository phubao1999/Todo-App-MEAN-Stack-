const express = require('express');
const app = express();
const mongo = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const routerIndex = require('./routes')(app);

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

app.get('/', (req, res) => {
    res.send('Welcome To My Web Server');
});

// MiddleWare

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Set Routes API
routerIndex.registerRoutes();

app.listen(port, () => {
    console.log(`Server Is Listening On port ${port}`);
});