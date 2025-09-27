const express = require('express');
const authController = require('../src/controllers/auth.controller');

const router = express.Router();

//USER AUTH APIs
router.post('/user/register',authController.registerUser);
router.post('/user/login', authController.loginUser);
router.get('/user/logout', authController.logoutUser);

//FACULTY AUTH APIs
router.post('/faculty-account/register',authController.registerFacultyAccount);
router.post('/faculty/login',authController.loginAccount);
router.get('/faculty/logout',authController.logoutAccount);
module.exports = router;
