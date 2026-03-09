import db from './db.js';
import express from 'express';
import cors from 'cors';
import customerRouter from './routes/customerRoute.js'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/customer',customerRouter)







db()
app.listen(process.env.PORT,()=>{console.log('Server is running on port '+process.env.PORT)})