const mongoose = require("mongoose")
const schema =mongoose.Schema

const userPost = new schema({
    post:{
        type:String
    },
    post_remarks:{
        type:String
    },
    userid:{
        type:String
    }

})
const posts = mongoose.model('userPost',userPost)
module.exports = {posts}