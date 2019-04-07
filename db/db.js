const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/manager'

mongoose.connect(DB_URL);

mongoose.connection.on('connected', function(){
    console.log('mongoose connection open to' + DB_URL)
})

mongoose.connection.on('error', function(err){
    console.log('mongoose connection open to' + err);
})

mongoose.connection.on('disconnected', function(err){
    console.log('mongoose connection');
})

module.exports = mongoose;