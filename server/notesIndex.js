const express = require('express')
const cors = require('cors')
const massive = require('massive')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const port = 3434

const getNote = (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance.getNote().then(resp => res.status(200).send(resp))
}
app.get(`api/getNote`, (req, res) => {
  getNote(req, res)
})

massive(process.env.connectionString).then(db => {
  app.set('db', db)
  app.listen(3434, () => {
    console.log(`Listening on port ${port}`)
  })
  console.log('Connected to database')
})
