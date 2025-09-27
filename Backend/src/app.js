//create a server



const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRoutes = require("../routes/auth.routes")
const studentRoutes = require('../routes/student.route')

app.use(express.json());  //middleware to parse json data in request body(req.body)
app.use(cookieParser());  //middleware to parse cookies for jwt authentication


app.get('/' , (req , res) => {
    res.send('Hello World!');
})


app.use('/api/auth', authRoutes);
app.use('/api/auth',studentRoutes);
    


module.exports = app;