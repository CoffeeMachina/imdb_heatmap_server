import heatmapModel from "../model/heatmapModel.js";

export const showMessage = (req, res) => {
    res.status(200).send(`Message: ${req.params.message}`)
}

export const heatmapData = async (req, res) => {
    let query = await heatmapModel.find({}).exec()
    res.json(query)
}
export const heatmapDataLimit = async (req, res) => {
    let query = await heatmapModel.find({}).limit(req.params.number).exec();
    res.json(query)
}



export const heatmapId = async (req, res) => {
    let query = await heatmapModel.findById(req.params.id)
    res.json(query)
}

