import mongoose from "mongoose";
// import generateSchema from "generate-schema";
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema;

// TESTING:
// import generateSchema from "generate-schema";
// import BCS from './BCS.json' assert {type: "json"};
// let schema = generateSchema.json('heatmap',BCS )

// console.log(schema)
// const heatmapSchema = new Schema({schema});


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


export default mongoose.model("imdb", heatmapSchema);
