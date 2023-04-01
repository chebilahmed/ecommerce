const bodyParser = require('body-parser');
const express = require('express');
const env= require('dotenv');
const mongoose = require('mongoose');
const app= express();

const userRoutes= require("./routes/user")
const adminRoutes = require("./routes/admin/auth");



env.config();

app.use(bodyParser())

app.use('/api',userRoutes)
app.use("/api", adminRoutes);

mongoose.connect(`mongodb+srv://${process.env.mongo_user_db}:${process.env.mongo_pass_db}@cluster0.qbg0zl3.mongodb.net/?retryWrites=true&w=majority`,

{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
).then(()=>{
    console.log("db connection")
})
// 



app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT)
})