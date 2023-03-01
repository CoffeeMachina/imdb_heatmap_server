import mongoose from "mongoose";

export const dbConfig = () => {
    // mongoose.connect(process.env.MONGO_CONNECTION)
    mongoose.connect(process.env.MONGO_CONNECTION_CLUSTER0)
        .then(() => console.log("Successful connection to MongoDB."))
        .catch((e) => console.log("Error Connecting to MongoDB: ", e))


    const connection = mongoose.connection;

    connection.on("Connected", () => {
        console.log("MongoDB is connected.")
    })

    connection.on("Error:", (e) => console.log(e))
};