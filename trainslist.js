const mongoose = require("mongoose");
const { stringify } = require("querystring");

mongoose.model("trains",{
    //name of train, date of journey

    Nameoftrain :{
        type: String,
        require: true
    },
    From :{
        type:String,
        require:true
    },
    to :{
        type:String,
        require:true
    },
    class :{
        type:String,
        require:true
    },
    dateofjourney:{
        type:Number,
        require:true
    }
});