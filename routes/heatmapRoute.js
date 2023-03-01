import express from "express";

const router = express.Router();
import {heatmapData, showMessage, heatmapId} from "../controller/heatmapData.js";

// router.get("/:message",showMessage)

router.get("/heatmap", heatmapData);

router.get("/heatmap/:id", heatmapId);

export default router;