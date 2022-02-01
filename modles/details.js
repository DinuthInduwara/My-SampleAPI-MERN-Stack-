const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const detailShema = new Schema({
    year : {
        type : Number,
        required : true
    },
    placeOrEvent : {
        type : String,
        required : true
    },
    ids : []
})






const photo = mongoose.model("Photos", detailShema);


module.exports = photo;
