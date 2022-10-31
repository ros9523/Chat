const express  = require('express')
const db = require('./utils/database')

const {port} = require('./config')
const authRouter = require('./auth/auth.router')
const initModels = require('./models/initModels')
const userRouter = require('./users/users.router')
const conversationsRouter= require('./conversations/conversations.router')
const messagesRouter= require('./messages/messages.router')
const app = express()

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })

    initModels()
    
app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users `
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/conversations', conversationsRouter, messagesRouter)



app.listen(port, ()=>{
console.log(`Server started at port ${port}`)
})