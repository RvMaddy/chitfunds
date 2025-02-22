import express from "express";
import { createChitGroup, getChitGroups, getChitGroupById, updateChitGroup, deleteChitGroup } from "../controllers/chitGroups.controller.js";

const router = express.Router();

router.post("/", createChitGroup);
router.get("/", getChitGroups);
router.get("/:id", getChitGroupById);
router.put("/:id", updateChitGroup);
router.delete("/:id", deleteChitGroup);

router.get('/', (req, res) => {
    res.json({ message: 'Chit Groups route working' });
});

export default router;
