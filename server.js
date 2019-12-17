const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Coneect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected Successfully...'))
    .catch(err => console.log(err));
   
// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Your Back-end Server started on port number: ${port}`));