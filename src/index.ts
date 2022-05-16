import express from 'express';
import { PORT } from './constants';
import todoRouter from "./routes/todos";
const app = express();
app.use('/', todoRouter);

app.listen(PORT,()=>console.log(`Listening to ${PORT}`))