const bcrypt = require("bcrypt")

const hashPassword = async(password)=>{
    
   try {
    const hashedPassword = await bcrypt.hash(password , 10)
    return hashedPassword
   } 
   
   catch (error) {
      res.status(400).send({
         success : false ,
         message : "Helper have arror"
      })
   }
   

}


const compairedPassword = async(password , hashedPassword) => {

   return bcrypt.compare(password , hashedPassword)

}


module.exports = {hashPassword,compairedPassword}