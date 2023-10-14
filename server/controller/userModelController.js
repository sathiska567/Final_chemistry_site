const express = require("express")
const userModel = require("../model/userModel")



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
      
    } catch (error) {
        res.status(200).send({
            success : false,
            error     
         })
    }

}



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

      
    } catch (error) {
        res.status(400).send({
            success : false,
            message : "ERROR",  
            error      
         })
    }

}


module.exports = {registerController , loginController}

