import express from 'express';
import cors from 'cors';
import { connectdb } from './db.js';
import { authrouter } from './routes/authroute.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors());


app.use(express.json());

// app.get('/hep', (req, res) => {
//     res.send({ message: "Connected" });
// })

app.use('/api', authrouter);


app.listen(3000, () => {
    connectdb();
    console.log("Server is started on port 3000");
})

