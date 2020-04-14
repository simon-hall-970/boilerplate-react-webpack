const path = require('path')
const express = require('express')

const server = express()

const {getRankings} = require('./api/ufc')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/api/v1/ufc', (req, res) => {
    getRankings().then(rankings => {
        res.json(rankings)
    })
})

module.exports = server
