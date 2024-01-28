import mongoose from "mongoose";


const connectDb = () => {

    const mongoURI = "mongodb://127.0.0.1:27017/TicketSupportSystem"

    mongoose.connect(mongoURI);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB successfully!');
        // Now you can start interacting with the database
    });

}

export default connectDb;