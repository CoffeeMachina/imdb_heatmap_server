import heatmapModel from "../model/heatmapModel.js";
export const showMessage = (req, res) => {
    res.status(200).send(`Message: ${req.params.message}`)
}

export const heatmapData = async (req, res) => {
    console.log("Controller QUERY get all: ",)
    let query = await heatmapModel.find({}).exec()
    res.json(query)
}

export const heatmapId = async (req, res) => {
    let query = await heatmapModel.findById(req.params.id)
    res.json(query)
}



// .get('/usersList', function(req, res) {
//     User.find({}, function(err, users) {
//         var userMap = {};
//
//         users.forEach(function(user) {
//             userMap[user._id] = user;
//         });
//
//         res.send(userMap);
//     });
// });