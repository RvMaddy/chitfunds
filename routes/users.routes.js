import express from "express";
import { registerUser, loginUser, getUsers } from "../controllers/users.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);

export default router;
