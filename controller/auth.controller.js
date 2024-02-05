const { response } = require('express')
const { register } = require('../model/auth.model')
const jwt = require('jsonwebtoken');
// const bcryptjs = require('bcryptjs')
const getRegisterData = async (req, res, next) => {
    try {
        const data = await register.find()
        res.status(200).json({
            error: false,
            message: "Success",
            response: data
        })
    } catch (err) {
        next(err)
    }
}
const RegisterLogic = async (req, res, next) => {
    try {
        const {
            mobile_number,
            user_name,
            dob,
            gender
        } = req.body
        const data = await register.create({
            mobile_number,
            user_name,
            dob,
            gender
        })
        res.status(200).json({
            error: false,
            message: "User Registered Successfully",
            response: {
                status:res.status,
                msg:"User Registered Successfully"
            }
        })

    } catch (err) {
        next(err)
    }
}
const Login = async (req,res,next) =>{
    try {
        const {
            mobile_number
        } = req.body
        const dataInfo = await register.find({mobile_number:req.body.mobile_number})
        console.log(process.env.jwtSecret);
        console.log(dataInfo);
        const data={
            mobile_number: mobile_number,
            user_name:dataInfo[0].user_name,
            dob:dataInfo[0].dob,
            gender:dataInfo[0].gender
        }
        if(dataInfo){
                const token = jwt.sign(data, process.env.jwtSecret,{ expiresIn: '1h' });
                res.status(200).json({
                    error: false,
                    token:token,
                    message: "User Registered Successfully",
                    response: dataInfo
                })
            
        }
       
    }
    catch (err){
        next(err)
    }
}
module.exports = {RegisterLogic,getRegisterData,Login}
