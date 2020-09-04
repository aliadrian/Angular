const route = require('express').Router()
const userModel = require('../models/user/userModel')

//Authorize Guard
// const auth = require('../guards/authorize')

route.post('/register', userModel.registerUser)
route.post('/login', userModel.loginUser)

// route.get('/:id', auth.verifyToken, userModel.getUser)

module.exports = route