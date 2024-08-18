const mongoose = require('mongoose');

const conn = async()=>{
    try{
        await mongoose.connect('mongodb+srv://neardealadmin:GjO41bp4g8s5je3Z@neardealdb.aeutq.mongodb.net/');
        console.log('Connected to MongoDB');
    }catch(err){
        console.log(err);
    }
}

module.exports = conn;