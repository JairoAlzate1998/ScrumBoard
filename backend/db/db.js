const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect();
    } catch (error) {
        
    }
}