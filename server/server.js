const path = require('path')
const express = require('express')

const server = express()

const {getRankings, getFighter} = require('./api/ufc')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/api/v1/ufc', (req, res) => {
    getRankings().then(rankings => {
        res.json(rankings)
    })
})

server.get('/api/v1/ufc/fighter/:id', (req, res) => {
    getFighter(req.params.id).then(fighter => {
        res.json(fighter)
    })
})

module.exports = server
