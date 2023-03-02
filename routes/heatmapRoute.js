import express from "express";

const router = express.Router();
import {heatmapData, heatmapId, heatmapDataLimit} from "../controller/heatmapData.js";


router.get("/heatmap", heatmapData);

router.get("/heatmap/limit/:number", heatmapDataLimit);

router.get("/heatmap/:id", heatmapId);

export default router;