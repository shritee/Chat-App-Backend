const {posts} = require('../model/post.model')


const postNewPost = async(req,res,next)=>{
    try{
        const {
            post,
            post_remarks,
            userid
           
        }=req.body
        console.log(req.file.filename);
        let front = `http://localhost:3200/uploads/${req.file.filename}`;
        const data = await posts.create( {
            post:front,
            post_remarks,
            userid
        })
        res.status(200).json({
            error: false,
            message:"Product Added Successfully",
            data:data
        })
    }catch(err){
        next(err)
    }
}
const getPost = async(req,res,next)=>{
    try{
        let  userid = req.params.userid
        console.log(userid);
        const post = await posts.find({userid:userid})
        console.log(post);
        res.status(200).json({
            error: false,
            message:"Success",
            data:post
        })
    }catch(err){
        next(err)
    }
}
module.exports = { postNewPost ,getPost};