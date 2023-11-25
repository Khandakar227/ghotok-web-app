import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
