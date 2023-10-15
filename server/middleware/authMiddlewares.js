const JWT = require("jsonwebtoken")
const userModel = require("../model/userModel")

// Protected Routes token base
const requireSignIn = async(req,res,next)=>{

  
  try {
    
    const decode = JWT.verify(req.headers.authorization , process.env.JWT)

    req.user = decode;
    next();
   }       
   catch (error) {
      console.log(error);
   }
}


module.exports = {requireSignIn}