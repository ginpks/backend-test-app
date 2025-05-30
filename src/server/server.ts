import express, { Express, Request, Response } from 'express';
import { connectDB }  from './db/db'; // Corrected import path and named import
import submissionRoutes from './routes/routes'; // Import the new router
import path from 'path'; // Import the 'path' module

const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', submissionRoutes);


const startServer = async (): Promise<void> => {
    try {
        await connectDB();
        app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

    } catch(error) {
        console.error('Failed to start the server: ', error);
        process.exit(1)
    }
}


startServer();