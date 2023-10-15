require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");

const authRouter = require("./router/UserRouter");

require("./db/Userdb"); 

const app = express();

app.use(express.json()); // middlewares
app.use(cors());

app.use("/api/v1/auth/", authRouter);

const PORT = process.env.PORT || 3000; // Define a default port if PORT is not set in .env

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
