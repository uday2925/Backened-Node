const express = require("express");
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/note.routes")
const app = express();

app.use(express.json());

app.use("/users",userRouter)
app.use("/notes",noteRouter)


app.get("/", (req, res) => {
  res.send(`Hello, this route is working on endpoint "/"`);
});

app.listen(8080, async () => {
    console.log("listening on port", 8080);
    //our server will be running all the time at the above port
  try {
    await connection;
   console.log("connected to the database")
  } catch (err) {  
    console.log("some thing went wrong!",err)
  }
});
