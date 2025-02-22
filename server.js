import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Basic middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("ChitFund Backend API is running...");
});

// Import routes
try {
    const chitGroupsRoutes = (await import("./routes/chitGroupsroutes.js")).default;
    const usersRoutes = (await import("./routes/users.routes.js")).default;
    const chitMembersRoutes = (await import("./routes/chitMembersRoutes.js")).default;

    // Apply routes
    app.use("/api/chit-groups", chitGroupsRoutes);
    app.use("/api/users", usersRoutes);
    app.use("/api/chitmembers", chitMembersRoutes);
} catch (error) {
    console.error('Route import error:', error);
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        message: 'Something went wrong!',
        error: err.message
    });
});

// Start server
const PORT = process.env.PORT || 5000;
try {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} catch (error) {
    console.error('Server startup error:', error);
}

// Database connection
prisma.$connect()
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error('Database connection error:', error));

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

