//for connecting data base
const mongoose = require("mongoose");

const connection=mongoose.connect("mongodb://127.0.0.1:27017/expressDBukr");

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    age:{type:Number,required:true},
    is_married:{type:Boolean,required:true},
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)




module.exports={connection,UserModel};
