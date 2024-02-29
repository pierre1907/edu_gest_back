const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strict', false);
        await mongoose.connect(process.env.MONGO_URI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        console.log('La base de données est connectée !');
    } catch (error) {
        console.error('Erreur de connexion à la base de données:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;

