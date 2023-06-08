const jwt = require("jsonwebtoken");
const { blacklist } = require("../blacklist");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token)
  if (token) {
    if(blacklist.includes(token)){
        res.json({msg:"Please Login agian. as token is there in blacklist"})
    }
    try {
      const decoded = jwt.verify(token, "secretkeymasai");
      if (decoded) {
        next()
      }
      else
      {
        res.json({msg:"Token not recognised."})
      }
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  }
  else
  {
    res.json({msg:"Please Login"})
  }
};

module.exports={auth}