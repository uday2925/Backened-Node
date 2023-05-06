//for running server
const express = require("express");
//for connecting data base
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Hellow i am running");
});

//as long as the server is running it should be connected to the DB so as the below function is running iam using same to conect to db

app.listen(8080, async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/expressDBukr")
        console.log("connected to the DB")
    }catch(err){
            console.log("error in while connecting database",err)
    }   
  console.log("server is running at port 8080");
});

