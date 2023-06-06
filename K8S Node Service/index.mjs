import express from 'express'
import os from 'os'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello i am Pod from ${os.hostname()}`)
})

app.listen(port, () => {
    console.log(`webserver is listening at port ${port} : Version 1.2.0`)
    console.log(`${os.hostname()}`)
})