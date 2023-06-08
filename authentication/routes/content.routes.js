const express=require("express");
var jwt = require('jsonwebtoken');
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
    const {token}=req.query;
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
contentRouter.get("/series",(req,res)=>{
    try{
        res.status(200).json({msg:"this is series page"})
    }
    catch(err){
        console.log(err)
        res.status(400).json({err:err})
    }
})

module.exports={contentRouter}