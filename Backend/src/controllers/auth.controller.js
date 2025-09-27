//write the logic of route :

const userModel = require('../models/user.models');
const facultyAccountModel = require('../models/facultyaccount.model')
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken'); //to create token which cookies use to authenticate user


async function registerUser(req, res) {
    
    const { FullName, Email, Password } = req.body;  //in express body parser is used to parse the body but not be parsed so use a middleware

    const isUserAlreadyExist = await userModel.findOne({
        Email
    })

    if (isUserAlreadyExist) {
        return res.status(400).send({
            message: "User already exist"
        })
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
  
    //here create a new user in db :
    const user = await userModel.create({
        FullName,
        Email,
        Password: hashedPassword
    })
 
    // create a token for user and use cookies to display on the frontend:
    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).send({
        message: "User registered successfully",
        user: {
            _id: user._id,
            email: user.Email,
            fullName: user.FullName
        }
    })




}

async function loginUser(req, res) {
    const { Email, Password } = req.body;

    const user = await userModel.findOne({
        Email
    })

    if(!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if(!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User Logged in successfully",
        user: {
            _id: user.id,
            email: user.Email,
            FullName: user.FullName
        }
    })
}


function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    })
}


async function registerFacultyAccount(req, res) {
    const {FullName, Email, Password} = req.body;

    const isAccountAlreadyExist = await facultyAccountModel.findOne({
        Email
    });

    if (isAccountAlreadyExist) {
        return res.status(400).json({
            message: "Faculty Account Already Exists"
        })
    }

        const hashedPassword = await bcrypt.hash(Password, 10);

        const FacultyAccount = await facultyAccountModel.create({
            FullName,
            Email,
            Password: hashedPassword
        })

        const token = jwt.sign({
            id: FacultyAccount._id,
        }, process.env.JWT_SECRET)

        res.cookie("token", token)
        res.status(201).send({
            message: "Faculty Account registered successfully",
            facultyAccount: {
                _id: FacultyAccount._id,
                Email: FacultyAccount.Email,
                Name: FacultyAccount.FullName
            }
        })
    }


async function loginAccount(req, res) {
    const { Email, Password } = req.body;

    const account = await facultyAccountModel.findOne({
        Email
    })

    if(!account) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(Password, account.Password);
    if(!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: account._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "faculty Logged in successfully",
        account: {
            _id: account.id,
            email: account.Email,
            FullName: account.FullName
        }
    })

    function logoutfaculty(req, res) {

    }

}

function logoutAccount(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "Faculty logged out successfully"
    })
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFacultyAccount,  
    loginAccount,
    logoutAccount
}


