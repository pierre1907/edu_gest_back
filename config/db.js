const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strict', false);
        mongoose.connect(process.env.MONGO_URI, ()=>
            console.log('La base de données est connectée !')
        )
    } catch (error) {
        console.error('error', error);
        process.exit(1);
    }
}

module.exports = connectDB;
