const mongoose = require("mongoose");

const main = async () => {
  try {
    //logic to connect mongoose                    //MONGO DB URL
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/learningMongoose"
    );
    // mongo url==>mongodb://127.0.0.1:27017/     databasename===>learningMongoDb
    console.log("connected to DB");
    UserModel.insertMany([
      { age: "Uday", age: "26", city: "Hyderabad" },
      { age: "Kiran", age: "26", city: "Hyderabad" },
    ]);

    const user = new UserModel({
      name: "UDAY KIRAN REDDY KATTA",
      age: "26",
      city: "Hyderabad",
    });
    await user.save();
    console.log("inserted the data.");

    //below way we can disconnect
    // connection.disconnect()
    // console.log("disconnected to DB");
  } catch (err) {
    console.log(err);
  }
};
main();

//1.SCHEME--->2. MODEL --->3 DOCUMENT

// mongoose will typecasting in to number or string based on the schema you wrote if possible like if we give number it will be converted to string based on number
const userSchema = mongoose.Schema(
  {
    // name: String,
    name: { type: String, required: true },
    age: Number,
    city: String,
  },
  {
    versionKey: false,
  }
);

// for creating model we need schema
// collection name should be kepst inside model
//below user is  the collections, and when you see collection users will be there plural. Technically collections are the group of different documents.
const UserModel = mongoose.model("user", userSchema);
//here above name the should be pascal case just like Constructor functions which are used to create multple objects.
