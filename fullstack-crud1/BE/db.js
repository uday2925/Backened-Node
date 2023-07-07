const mongoose = require("mongoose");
// mongoose.set("debug", true);

const connection = mongoose.connect(`mongodb://localhost:27017/notes`).then(()=>{
    console.log("connected to the db successfully")
}).catch((err)=>{
    console.log("error while connecting to the db",err)
});

module.exports = {
  connection,
};
