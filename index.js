const express = require('express')
const app = express()
const data = require('./data.json')
const cors = require('cors')
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send(data)
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    const singleChef = data.find(c => c.id === parseInt(id))
    res.send(singleChef)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})