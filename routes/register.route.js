const {RegisterLogic,Login} = require('../controller/auth.controller')

const express = require ("express")

const router = express.Router()

router.post(`/register`,RegisterLogic)
router.post(`/login`,Login)
module.exports = router