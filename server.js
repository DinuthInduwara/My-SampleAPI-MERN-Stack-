const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const MONGODB_URI="mongodb+srv://{username}:{passowed}@cluster0.p4ufu.mongodb.net/{DB_Name}";

const PORT = 4080;


app.use(cors());
app.use(bodyParser.json());




mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const emmawatsonRouter = require("./routes/emmawatson.js");
app.use("/emmawatson", emmawatsonRouter);











const db = mongoose.connection;
db.once("open", () =>{
    console.log("mongo connected");
});



app.listen(PORT, () => {
    console.log("server is up and running" , PORT)
})
