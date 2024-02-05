const {getRegisterData} = require('../controller/auth.controller')
const authentication = require('../middleware/authentication')
const express = require ("express")

const router = express.Router()

router.get(`/getRegisteredData`,authentication.verifyToken,getRegisterData)


module.exports = router

