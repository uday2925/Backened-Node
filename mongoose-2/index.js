//for running server
const express = require("express");
//go to db file toknow mongoose and db logic

const { UserModel, connection } = require("./db");

const app = express();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hellow i am running");
});

//create
app.post("/",(req,res)=>{
    try{
        const data=req.body;        
        //as single input
        const user=new UserModel(req.body)//will work with out new also
        //created above and saving it now 
        user.save()
        res.send("Added a new User");
    }
    catch(err){
        console.log(err)
    }
   
    
})
//read
// app.get("/users",async (req,res)=>{
//     try{
//         const users=await UserModel.find()
//     res.send(users)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// })

// The above one is used will only work with out params and will not work with out query params and
// below one will work for both query params and without query params

app.get("/users",async(req,res)=>{
    const query=req.query;
    try{
    const users=await UserModel.find(query)
    res.send(users)
    }
    catch(err){
        console.log(err)
    }
})

//as long as the server is running it should be connected to the DB so as the below function is running iam using same to conect to db


//update 
app.patch("/users/:id",async (req,res)=>{
    const {id}=req.params;
    console.log(id)
    try{
      await UserModel.findByIdAndUpdate({_id:id},req.body)
      res.send("Data updated")  
    }
    catch(err){
        console.log(err)
    }

})

//DELETE
app.post("/users/:id",async (req,res)=>{
    const {id}=req.params;
    try{
      await UserModel.findByIdAndDelete({_id:id})
      res.send("Data DELETED")  
    }
    catch(er){
        console.log(err)
    }

})

app.listen(8080, async () => {
  try {
    await connection;
    // await mongoose.connect("mongodb://127.0.0.1:27017/expressDBukr")
    console.log("connected to the DB");
  } catch (err) {
    console.log("error in while connecting database", err);
  }
  console.log("server is running at port 8080");
});
