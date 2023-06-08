const express=require("express");
const connection=require("./db");
const {userRouter}=require("./routes/user.routes")
require("dotenv").config()

const app=express();

app.use(express.json());
app.use("/users",userRouter)

app.post("/register",(req,res)=>{

})

app.post("/login",(req,res)=>{

})


app.listen(8080,async ()=>{
    try{
        await connection
        console.log(`running on the port ${process.env.PORT}`)
    }
    catch(err){
        console.log("somethign when wrong",err)
    }
    
})