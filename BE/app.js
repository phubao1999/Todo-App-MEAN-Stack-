const express = require('express');
const app = express();
const mongo = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const listRouter = require('./routes/list');
const index = require('./routes/index');
const users = require('./routes/users');
const port = process.env.PORT || 3000;

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
app.use('/users', users);
app.use('/', index);

// Routes
// app.get('/', (req, res) => {
//     res.send('We Are In Home');
// });

app.listen(port, () => {
    console.log(`Server Is Listening On port ${port}`);
});