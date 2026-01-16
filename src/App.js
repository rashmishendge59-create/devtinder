const express = require("express");
const app = express();

app.use("/user",
    (req,res,next) => {
        console.log("1 rh ");
        next();
    },
    (req,res,next) =>{
        console.log("2 rh");
        next();
    },
    (req,res,next) => {
        console.log("3rd rh");
        res.send("3rd rh");
        next();
    }
);



app.listen(3000,() => {
    console.log("server is running on port 3000");
});