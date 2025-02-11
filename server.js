
// import express from "express"
// import bodyParser from 'body-parser'
// import cors from 'cors'
// import chitMembersRoutes from './routes/chitMembersRoutes.js'
// import authRoutes from './routes/authRoutes.js';
// // Create an instance of Express
// const app = express();

// // Middleware
// app.use(cors()); // Allow cross-origin requests (for frontend React app)
// app.use(bodyParser.json()); // Parse incoming JSON requests

// // Use chit members routes
// app.use('/api/login', authRoutes);
// app.use('/api/chit_members', chitMembersRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import chitGroupsRoutes from "./routes/chitGroupsroutes.js";
import usersRoutes from "./routes/users.routes.js";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chit-groups", chitGroupsRoutes);
app.use("/api/users", usersRoutes);

app.get("/", (req, res) => {
    res.send("ChitFund Backend API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

