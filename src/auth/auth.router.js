

const router = require('express').Router()
const {login}=require('./auth.services')

const { registerUser } = require('../models/users/users.services')


// /api/v1/auth/register
router.post('/register', registerUser)
router.post('/login',login)

module.exports = router 
