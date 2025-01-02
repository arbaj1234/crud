import express from 'express';
import dotenv from 'dotenv'
import  connectDB  from './db/UserConnectiondb.js'
// import userRouter from './routers/userRouter.js'im
import router from './routers/userRouter.js'


dotenv.config()
const app = express();
connectDB()


const PORT=process.env.PORT || 3000

app.use(express.json());
app.use('/api',router)


app.listen(PORT,()=>{
    console.log(`server ran successfully ${PORT}`);
})