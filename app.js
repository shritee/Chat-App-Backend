const express = require("express")
const cors = require("cors")

const app = express();

require('dotenv').config();
require('./db')
 const PORT = process.env.PORT || 3200
// cors middleware
app.use(cors('*'));
app.use(express.static('frontend'))
// bodyparser middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json({
    limit: "20mb"
}));

// const auth = require('./routes/auth.route')
const register = require('./routes/register.route')
const auth = require('./routes/auth.route')
app.use('',register)
app.use('/auth',auth)
app.get('/',(req,res)=>{
    console.log("Its working");
    res.send("Its working")
})


//Running Server Locally
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
}).on('error', function (err) {
    console.log("Something Went Worng", err);
});