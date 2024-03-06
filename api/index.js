import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
mongoose.connect(process.env.MONGO).
then(()=>{
    console.log('mongoDb is connected');
})
.catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(3000, () =>{
    console.log('server is runnning at port 3000');
});

