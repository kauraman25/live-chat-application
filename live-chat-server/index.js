const express = require("express");
const dotenv  = require("dotenv");

const app = express();

dotenv.config();


app.get("/",(req,res) => {
    res.send("Api is running...");
})

console.log(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is Running.."));


