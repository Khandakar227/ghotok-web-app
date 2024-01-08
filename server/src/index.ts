import cookieParser from 'cookie-parser';
import express from 'express';
import { MongoDb } from './models/mongodb/driver';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import searchRoute from './routes/search';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors({
  credentials: true,
  origin: '*'
}))
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/v1/api/auth", authRoutes);
app.use("/v1/api/user", userRoutes);
app.use("/v1/api/search", searchRoute);

// Initialize Database
MongoDb.init(process.env.MONGODB_URL as string, "ghotok-dev");

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
