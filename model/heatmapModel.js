import mongoose from "mongoose";
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema;

const heatmapSchema = new Schema({
    id: ObjectId,
    ratings: [
        {
            id: String,
            data: [
                {
                    x: String,
                    y: Number
                }
            ]
        }
    ],
    votes: [
        {
            id: String,
            data: [
                {
                    x: String,
                    y: Number
                }
            ]
        }
    ],
    metrics: {
        tconst: String,
        name: String,
        average_rating: Number,
        total_hours: Number,
        min_score: Number,
        max_score: Number,
        std_rating: Number,
        min_votes: Number,
        max_votes: Number,
        average_votes: Number,
        std_votes: Number,
        total_votes: Number
    }
})


export default mongoose.model("imdbs", heatmapSchema);
