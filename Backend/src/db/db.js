// define logic how to server connect to the database

const mongoose = require('mongoose');




function connectDB() {
    mongoose.connect("mongodb://localhost:27017/student-data")
        .then(() => {
            console.log("Database connected");
        })
        .catch((err) => {
            console.log("Database connection error:",err);
        })
}


module.exports = connectDB;