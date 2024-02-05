const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const tokenHeader = req.headers['token'];
  
    if (!tokenHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    const token = tokenHeader.split(' ')[1]; 

    jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
        console.log(err);
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      req.user = decoded;
      next(); 
    });
  };
  
module.exports = {
    verifyToken
}