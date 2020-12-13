const express = require("express");
const app=express();
const bodyParser=require("body-parser");
    var path=require('path');
    

//Load Mangoos
    app.use(bodyParser.json());

const mongoose = require("mongoose");

    require("./Available")
    const Available=mongoose.model("AvailableTicket");
    
    mongoose.connect("mongodb+srv://chandrika:chandrika@12@cluster0.g5xpb.mongodb.net/chandrika?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true},() => {
        console.log("Connected to data base- Vacencies");
    });
    app.get('/',(req,res) => {
        res.send("Hey! Tickets are available .Hurry up.");
    })

    

        app.post ('/AvailableTicket',(req,res)=>{
            var newticket = {
                AvailableTickets:req.body.AvailableTickets,
                TicketsNeeded:req.body.TicketsNeeded,
                RemainingTickets :req.body.RemainingTickets
            }
            var AvailableTicket = new Available(newticket)
        
            AvailableTicket.save().then(()=>{
                console.log("newtrains details here!")
            }).catch((err)=>{
                if(err){
                    throw err;  
                }
            })
        res.send("Enter No of tickets needed ")
        })

        app.get("/Ticketvacency/",(req,res)=>{
    
            Available.find().then((Ticketvacency)=>{
                res.send(Ticketvacency)
            }) 
        })
        function dis(TicketsNeeded)
        {
        document.getElementById("RemainingTickets").value=AvailableTickets-TicketsNeeded
         }
         app.get("/RemainingTickets/",(req,res)=>{
    
            Available.find().then((RemainingTickets)=>{
                res.send(RemainingTickets)
            }) 
        })

app.listen(1998, () => {
    console.log("Up and Running ! -- Hey! Tickets are vacent.");
})