const mongoose = require("mongoose");


mongoose.model("AvailableTicket",{
    //name of train, date of journey

    AvailableTickets :{
        type: Number,
        require: true
    },
     TicketsNeeded:{
        type:Number,
        require:true
    },
    RemainingTickets :{
        type:Number,
        require:true
    },
   
});