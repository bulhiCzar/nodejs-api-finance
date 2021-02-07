const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000



const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    if ('OPTIONS' === req.method) {res.sendStatus(200)} else {next()}
}


app.use(bodyParser.json())
app.use(allowCrossDomain)

app.use('/api/yahoo', require('./src/routes/database.yahoo'))
// app.use('/*', require('./src/routes/test'))

const start = async () => {
    try {
        // await DB()
        app.listen(PORT, () => { console.log(`Server on localhost:${PORT}`) })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()