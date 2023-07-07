const jwt=require("jsonwebtoken")


const auth=(req,res,next)=>{
const token=req.headers.authorization?.split(" ")[1]
//console.log(token)
if(token){
    try{
        var decoded = jwt.verify(token, 'ukrs');
      //  console.log({decoded})
        if(decoded)
        {           
            req.body.userID=decoded.userID;
            req.body.user=decoded.user
            next()
        }
        else
        {
            console.log(decoded)
            res.json({msg:"Not Authorized !"})
        }
       
    }
    catch(err){
        res.json({error:err.message})
    }
}
else
{
    res.json("msg:Please Login!!")
}
    
   
}

module.exports={
    auth
}