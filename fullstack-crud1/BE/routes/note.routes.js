const express=require("express");
const {NoteModel}=require("../models/note.model");
const { auth } = require("../middlewares/auth.middleware");

const noteRouter=express.Router();

//as we need auth to access noteRouter
noteRouter.use(auth)


noteRouter.post("/create",async (req,res)=>{
    try{
        const note=new NoteModel(req.body)
        await note.save()
        res.json({msg:"note saved successfully"})
    }catch(err){
        console.log(err)
    }

})

noteRouter.get("/",async (req,res)=>{
    try{
        const note=await NoteModel.find({userID:req.body.userID})      
        res.json({note:note})
    }catch(err){
        console.log(err)
    }
    
})

noteRouter.patch("/:noteID",async (req,res)=>{
   try{
    console.log(req.body)
    const { noteID } = req.params;
    const noteData = req.body;
    //console.log({noteData})
    const note = await NoteModel.findByIdAndUpdate(noteID, noteData, { new: true });
   // console.log({note,noteID})
    res.json(note)

   }catch(err){
    res.json({msg:err.message})
   }
    
})

noteRouter.delete("/:noteID",async (req,res)=>{
    try{
        const { noteID } = req.params;
    
        const note = await NoteModel.findByIdAndDelete(noteID);
    
        if (!note) {
          return res.status(404).json({ msg: "Note not found" });
        }
    
        res.json({ msg: "Note deleted successfully" });
    }catch(err){
     res.json({msg:err.message})
    }
     
 })


module.exports={noteRouter}