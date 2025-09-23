// user schema like what data we want to store in db

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FullName: {
        type : String,
        required : true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }

},
    {
    timestamps: true  //maintain createdAt and updatedAt automatically  
    }
)


const userModel = mongoose.model('user',userSchema); ///create user collection model

module.exports = userModel;