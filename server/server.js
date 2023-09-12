const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT;

//* Importing our mongoose config file so it will fire up the server 
require('./config/mongoose.config');

//* This will install the ability to make cross-origin requests. 
app.use(cors()) 

//* Express middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/person.routes')(app);


app.listen(port, () => console.log(`✨Listening on port: ${port}`));