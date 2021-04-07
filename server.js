const dotenv= require('dotenv')
dotenv.config()
const express = require('express')
//import route file to server
const auth = require('./routes/auth')
const private = require('./routes/private')

const errorHandler = require('./middleware/errors')

const connectDB = require('./config/db')

connectDB()

const app = express()


app.use(express.json())



//use the imported route file as second argument, or just pass the full require into the argument
app.use('/api/auth', auth)
app.use('/api/private', private)


//error handler should be last piece of middleware

app.use(errorHandler)

const PORT = process.env.PORT||5000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

// process.on("unhandledRejection",(err,promise)=>{
// console.log(`Logged Error:${err}`)
// server.close(()=>process.exit(1))
// }) 