require('dotenv').config()
const http = require('http')
const port = process.env.port || 9090
const app = require('./app')
const mongodb = require('mongoose')

const serverUri = 'http://localhost:' + port
const mongoUri = process.env.DATABASE_URL



// webserver
http.createServer(app).listen(port, () => console.log("Webserver:" + serverUri))

//starting mongodb database
mongodb
    .set('useCreateIndex', true)
    .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log("MONGODB: Running"))
    .catch((error) => console.log(error))
