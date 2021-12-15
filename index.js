const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const authRouter= require('./routes/authRouter')

const PORT = process.env.PORT|| 5000;

const app= express();

app.use(express.json());

const start = async ()=>{
    try{
        const password = 11111;
     await mongoose.connect('mongodb+srv://spacd'+password+'@cluster0.7ykty.mongodb.net/spac?retryWrites=true&w=majority');
        app.listen(PORT,()=>console.log(`Server started on port  ${PORT}`));
         
    } catch (e){
      console.log(e);
    }
}

start();