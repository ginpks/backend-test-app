"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db/db"); // Corrected import path and named import
const routes_1 = __importDefault(require("./routes/routes")); // Import the new router
const path_1 = __importDefault(require("path")); // Import the 'path' module
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use('/api', routes_1.default);
const startServer = async () => {
    try {
        await (0, db_1.connectDB)();
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error('Failed to start the server: ', error);
        process.exit(1);
    }
};
startServer();
