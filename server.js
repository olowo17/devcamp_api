const express = require("express");
const dotenv = require("dotenv");

// load env variables

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`App listening in ${process.env.NODE_ENV}  on port ${PORT}`)
);

app.get(("/"), (req,res)=>{
    res.json({
        message: "successfully connected"
    })
})