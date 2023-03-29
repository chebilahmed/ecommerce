const bodyParser = require('body-parser');
const express = require('express');
const env= require('dotenv');
const mongoose = require('mongoose');
const app= express();

env.config();

app.use(bodyParser())







mongoose.connect(`mongodb+srv://${process.env.mongo_user_db}:${process.env.mongo_pass_db}@cluster0.qbg0zl3.mongodb.net/?retryWrites=true&w=majority`,

{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
).then(()=>{
    console.log("db connection")
})
// 



app.get('/' ,(req,res,next)=>{
    res.status(200).json({
        "message": "hello",
    })
})

app.post('/data' ,(req,res,next)=>{
    res.status(200).json({
        "message": req.body,
    })
})

app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT)
})