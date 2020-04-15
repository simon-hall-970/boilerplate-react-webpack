const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = server
