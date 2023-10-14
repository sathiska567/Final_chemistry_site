const express = require("express")
const {registerController , loginController} = require("../controller/userModelController")

const router = express.Router();

router.post("/register",registerController)

router.post("/login",loginController)




module.exports = router