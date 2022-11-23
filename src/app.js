const userRouter = require('./models/users/users.router')
const authRouter=require('./auth/auth.router')
const initModels=require('./models/initModels')


const db = require('./utils/database')
const express = require('express')
const app = express()
app.use(express.json())

db.authenticate()
    .then(() => { console.log('DB authenticated') })
    .catch(err => { console.log(err) })

db.sync()
    .then(() => { console.log('DB synced') })
    .catch(err => { console.log(err) })

initModels()

const { port } = require('./config')

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK',
        users: `localhost:${port}/api/v1/users`
    })
})


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth',authRouter)


app.listen(port, () => {
    console.log(`server started at ${port}`)
})