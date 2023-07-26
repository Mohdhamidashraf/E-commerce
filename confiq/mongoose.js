const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// connect to database

mongoose.connect(
  "mongodb+srv://iammohdhamidashraf:jXzEWtGfn3pIShRk@ecommercedb.c0lfnsh.mongodb.net/EcommerceDB?retryWrites=true&w=majorityge",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Can't connect to MongoDb"));

// if connection is successful
db.once("open", () => {
  console.log("Mongodb Connected");
});

module.exports = db;

