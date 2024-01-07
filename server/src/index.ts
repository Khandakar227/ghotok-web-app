import cookieParser from 'cookie-parser';
import express from 'express';
import { MongoDb } from './models/mongodb/driver';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/v1/api/auth", authRoutes);

// Initialize Database
MongoDb.init(process.env.MONGODB_URL as string, "ghotok-dev");

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
