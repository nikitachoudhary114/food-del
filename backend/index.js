import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDb();

//api endpoint
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send('api working')
})
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})
//mongodb+srv://nikitac8383:jekZLt1EVulE1sSo@food-del.pcaix.mongodb.net/?