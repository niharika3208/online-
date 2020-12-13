//load Express
    const express = require("express");
    const app=express();
    const bodyParser=require("body-parser");
    var path=require('path');
    

//Load Mangoos
    app.use(bodyParser.json());

    const mongoose = require("mongoose");

    require("./trainslist")
    const trainslist=mongoose.model("trains");
    
    mongoose.connect("mongodb+srv://Niharika:niharika@12@cluster0.g5xpb.mongodb.net/Niharika?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true},() => {
        console.log("Connected to data base");
    });

app.get('/',(req,res) => {
    res.send("These are our train details.");
})

app.post ('/trains',(req,res)=>{
    var newtrain = {
        Nameoftrain:req.body.Nameoftrain,
        From:req.body.From,
        to:req.body.to,
        class:req.body.class,
        dateofjourney:req.body.dateofjourney
    }
    var trains = new trainslist(newtrain)

    trains.save().then(()=>{
        console.log("newtrains details here!")
    }).catch((err)=>{
        if(err){
            throw err;  
        }
    })
res.send("New train details created! Success!")
})

app.get("/Listoftrains/",(req,res)=>{
    
    trainslist.find().then((Listoftrains)=>{
        res.send(Listoftrains)
    })              

})
app.get("/trainslist/:id",(req,res)=>{
    trainslist.findById(req.params.id).then((trainslist) => {
        if(trainslist){
            res,json(trainslist)
        }else{
            res.sendStatus(404);
        }
    }).catch(err=>{
        if(err){
            throw err;
        }
    })
})
app.delete("/trainslist",(req,res)=>{
    trainslist.findOneAndRemove()
})




app.listen(1997, () => {
    console.log("Up and Running ! -- This is my first booking");
})
