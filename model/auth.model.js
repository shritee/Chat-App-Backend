const mongoose = require("mongoose")
const schema =mongoose.Schema

const registerSchema = new schema({
    mobile_number:{
        type:Number,
    },
    user_name:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:Date
    },
    gender:{
        type:String
    }
})

const register = mongoose.model("NewRegister",registerSchema)

module.exports = {register}