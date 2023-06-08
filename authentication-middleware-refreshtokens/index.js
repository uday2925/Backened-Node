const express=require("express");
const connection=require("./db");
const {userRouter}=require("./routes/user.routes");
const { contentRouter } = require("./routes/content.routes");
require("dotenv").config()

const app=express();

app.use(express.json());
app.use("/users",userRouter)
app.use("/content",contentRouter)

app.post("/register",(req,res)=>{

})

app.post("/login",(req,res)=>{

})


app.get("/regenerateToken",(req,res)=>{
const refreshToken=req.headers.authorization?.split(" ")[1];
const decoded=jwt.verify(refreshToken,"secretkeymasaiRefreshToken")
if(decoded){
    const token = jwt.sign({ course: "backened" }, "secretkeymasai", {
        expiresIn: 30,
      });
      res.send(token)
}
else{
    res.send("Invalid Refresh Token")
}
})

app.listen(8080,async ()=>{
    try{
        await connection
        console.log(`running on the port ${process.env.PORT} and connected to DB`)
    }
    catch(err){
        console.log("somethign when wrong",err)
    }
    
})