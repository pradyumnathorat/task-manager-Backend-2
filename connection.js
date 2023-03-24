const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
const connect = async () =>  {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to Database");
}

module.exports = connect;
