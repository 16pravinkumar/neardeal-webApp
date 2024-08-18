const mongoose = require('mongoose');

const conn = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/ecommerce');
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}

module.exports = conn;