import express from 'express'
import bodyParser, { urlencoded } from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import logger from "morgan"
import mongoose from 'mongoose'
import apiRouter from './routes'

console.log("value1")

const app = express()

app.use(bodyParser.json())
app.use(logger("dev"))
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors())

const PORT = 6005

app.listen(PORT, ()=> {console.log(`App is listening port ${PORT}`)})

const options = {
    
}
mongoose.connect('mongodb://127.0.0.1:27017/student_db', options).then(() => {
    console.log('mongodb connected'), err => {console.log('err', err)}})

//http://localhost:6004/api/v1
app.use('/api/v1', apiRouter)
export default app

