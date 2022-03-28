const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('./db/mongoose')
const postRequests= require('./routers/postRequests')
const app = express()
const port = process.env.PORT || 1000

//MAIN APP
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(postRequests)
app.use(cors({
	origin: 'http://localhost:3001'
}))

app.listen(port, () => {
	console.log(`server is up on port ${port}`)
})