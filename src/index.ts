import express from 'express';
import { PORT } from './constants';
const app = express();
app.get('/',(req, res)=>{
  res.send(`<div>Hi there </div>`)
})

app.listen(PORT,()=>console.log(`Listening to ${PORT}`))