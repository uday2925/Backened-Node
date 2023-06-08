const express=require("express");
var jwt = require('jsonwebtoken');
const { auth } = require("../middlewares/auth.middleware");
const contentRouter=express.Router();

contentRouter.get("/about",(req,res)=>{
    try{
        res.status(200).json({msg:"this is about page"})
    }
    catch(err){
        console.log(err)
        res.status(400).json({err:err})
    }
})
contentRouter.get("/movies",(req,res)=>{
    const {token}=req.headers.authorization?.split(" ")[1];
    try{
        jwt.verify(token, 'secretkeymasai', function(err, decoded) {
            console.log({decoded})
            if(decoded)
            {
                res.status(200).json({msg:"this is movies page"})
            }                
            
            else{
                res.status(200).json({msg:err.message})
            }
          });
        }
    catch(err){
        console.log(err)
        res.status(400).json({err:err})
    }
})

// adding authentication using auth middle ware and we can also write as app.use(auth)
contentRouter.get("/series",auth,(req,res)=>{
    try{
        res.status(200).json({msg:"this is series page"})
    }
    catch(err){
        console.log(err)
        res.status(400).json({err:err})
    }
})

module.exports={contentRouter}