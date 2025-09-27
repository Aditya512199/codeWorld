const facultyAccountModel = require('../models/facultyaccount.model');
const facultyModel = require('../models/facultyaccount.model')
const jwt = require("jsonwebtoken");


async function authStudentMiddleware(req, res, next){
    const token = req.cookies.token;
    if(!token) {
        res.status(401).json({
            message: "Please login first"
        })
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        const facultyAcount = await facultyAccountModel.findById(decode.id);
        req.facultyAccount = facultyAccount
        next()

    }  catch(err){
        return res.status(401).json({
            message: "Invalid token"
        })
    }


}

module.exports = {
    authStudentMiddleware
}    