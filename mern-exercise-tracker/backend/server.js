const express = require('express')
const cors = require('cors')
 const mongoose = require('mongoose') // connects to the DB

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://aaryan:aaryan@cluster0.fia4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port,  ()=>{
    console.log("server runs on port 5000")
})