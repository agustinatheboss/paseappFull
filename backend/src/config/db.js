const mongoose = require('mongoose');
require('dotenv').config();  // Cargar dotenv

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,          // Añadir esta opción
            useUnifiedTopology: true        // Añadir esta opción
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
