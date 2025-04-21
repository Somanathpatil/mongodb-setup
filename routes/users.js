const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");       

const userschema = mongoose.Schema({
  username:{
    type:String,
    require:true
  }
});

const exports = mongoose.model("exports",userschema); 