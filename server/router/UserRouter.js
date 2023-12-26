const express = require("express")
const {registerController , loginController,getAllUserController} = require("../controller/userModelController")

const router = express.Router();


// REGISTER ROUTES || POST
router.post("/register",registerController)


//USER LOGIN ROUTE || POST 
router.post("/login",loginController)

// GET REGISTERED USER DETAILS
router.get("/get-all-users",getAllUserController)


module.exports = router