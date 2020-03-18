const express= require('express');
const app = express();
const mongoose = require ('mongoose');
const env= require('dotenv');
env.config();
const authRoute= require('./routes/auth');
const postRoute = require('./routes/posts');

//connection
mongoose.connect(process.env.dbUrl,{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true },()=> console.log("mongo connect"));

//middleware
app.use(express.json());

//Route middleware
app.use('/api/user',authRoute);
app.use('/api/post',postRoute);



app.listen(3000,()=> console.log("Server is Up"));