const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const doctorRouter = require('./routes/doctorRoute')
const db = require('./db');
const app = express();
app.use(express.json());
app.use('/doctors', doctorRouter)

app.listen(8080, ()=>{
    console.log("Listening to port 8080");
});