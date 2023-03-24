const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
const connect = async () =>  {
    await mongoose.connect("mongodb+srv://Pradyumna:Pradyumna@cluster0.qxvv1hh.mongodb.net/Task_manager");
    console.log("Connected to Database");
}

module.exports = connect;
