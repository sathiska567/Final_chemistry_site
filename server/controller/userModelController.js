const express = require("express")
const userModel = require("../model/userModel")
const { hashPassword, compairedPassword } = require("../helper/authHelper")
const JWT = require("jsonwebtoken")



// REGISTERED user
const registerController = async(req,res)=>{
    try {

      const {name , email,password} = req.body

      if(!name){
        res.status(404).send({
            success : false,
            message : "Please enter your name",        
         })
      }
      if(!email){
        res.status(404).send({
            success : false,
            message : "Please enter your email",        
         })
      }
      if(!password){
        res.status(404).send({
            success : false,
            message : "Please enter your password",        
         })
      }

    
    //   check existing user or not
    const existingUser = await userModel.findOne({email})

    if(existingUser){

        res.status(200).send({
            success : false,
            message : "Already you have registered",        
         })
       
    }


    // register user and receive after hashing password
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({name , email , password:hashedPassword})

    user.save()

    res.status(200).send({
      success : true,
      message : "Registration successfull",
      user     
   })
      
    } catch (error) {
        res.status(200).send({
            success : false,
            error     
         })
    }
}


// LOGIN user
const loginController = async(req,res)=>{
    try {

      const {email,password} = req.body

      if(!email){
        res.status(404).send({
            success : false,
            message : "Please enter your email",        
         })
      }
      if(!password){
        res.status(404).send({
            success : false,
            message : "Please enter your password",        
         })
      }

    // find user
      const user = await userModel.findOne({email})

      if(!user){
        res.status(400).send({
          success : false,
          message : "Please enter your correct email"     
       })
      }

    // compair password
  const compairPassword = await compairedPassword(password , user.password )


  if(!compairPassword){
    res.status(400).send({
      success : false,
      message : "Please enter your correct password"     
   })
  }



  // token
  const token = JWT.sign({_id : user._id},process.env.JWT , {expiresIn : '7d'})

  res.status(200).send({
    success : true,
    message : "Login successfull",
    user : {
      name : user.name,
      email : user.email
    },
    token
  })

  res.status(200).send({
    success : true,
    message : "Login successfull"  

 })
      
    } catch (error) {
        res.status(400).send({
            success : false,
            message : "ERROR",  
            error      
         })
    }

}


module.exports = {registerController , loginController}

