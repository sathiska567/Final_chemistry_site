const mongoose = require("mongoose")

const Schema = mongoose.Schema;

// create a new schema
const userSchema = new Schema({
   name:{
     type:String,
     required:true
   },

   email:{
    type:String,
     required:true
   },
   password:{
     type:String,
     required:true
   },

   isAdmin : {
    type: Boolean,
    default:false
   },

   Usertype: {
    type: Boolean, // Assuming Usertype is a boolean field, adjust accordingly
    default: true,
  }
  

})


const user = mongoose.model("User",userSchema)

module.exports = user