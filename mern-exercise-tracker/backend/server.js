const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // mongoose will help connect to our MongoDB database

require('dotenv').config(); //configures to have our environment variables in .env file

// used to create our express server
const app = express(); 
const port = process.env.PORT || 5000; // the port the server will be on

// middleware for cors and parse json using express
app.use(cors()); // cors middleware
app.use(express.json()); // allow us to parse json b/c our server will be sending and receiving json

// URI is our database uri from mongodb atlas dashboard
const uri = process.env.ATLAS_URI;
// PASS IN URI WHERE THE DATABASE IS STORED AND STARTS THE CONNECTION
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("*****MongoDB database connection established successfully*****");
})

// requiring/importing files
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// for ex. if we go to rooturl/exercises, it'll load everything in the exercisesRouter
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// what starts the server. Listens on a certain port!
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})