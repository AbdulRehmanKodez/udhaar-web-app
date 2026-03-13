import db from './db.js';
import express from 'express';
import cors from 'cors';
import customerRouter from './routes/customerRoute.js'
import sheetRouter from './routes/sheetRoute.js'
const app = express();
app.use(cors(
        {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }
));
app.use(express.json());
app.use('/api/customer',customerRouter)
app.use('/api/sheet',sheetRouter)







db()
app.listen(process.env.PORT,()=>{console.log('Server is running on port '+process.env.PORT)})