const app = require('express')()
const bodyParser = require('body-parser')
const engine = require('./engine')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next()
})

app.use( bodyParser.json() )

app.post('/classify', (req, res) => {
    res.json({result: engine.classify(req.body, 'alcohol')})
})

app.listen(4000, _ => {
    console.log('Listening on port 4000')
})