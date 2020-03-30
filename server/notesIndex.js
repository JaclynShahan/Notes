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
app.get(`/api/getNote`, (req, res) => {
  getNote(req, res)
})

app.post(`/api/createNote`, (req, res) => {
  const { title, date, message } = req.body
  console.log('Request Received', title, date, message)
  console.log(req.body)
  const dbInstance = req.app.get('db')
  dbInstance.createNote(title, date, message).then(() => {
    getNote(req, res)
  })
})
app.put(`/api/updateNote`, (req, res) => {
  const { id, title, date, message } = req.body
  console.log(req.body)
  console.log('Updated Note', id, title, date, message)
  const dbInstance = req.app.get('db')
  dbInstance.updateNote(id, title, date, message).then(() => {
    getNote(req, res)
  })
})
app.delete(`/api/deleteNote/:id`, (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance.deleteNote(req.params.id).then(resp => getNote(req, res))
})
app.post(`/api/verifyPassword`, (req, res) => {
  console.log('Request Received')
  const { password } = req.body
  console.log(process.env.password)
  console.log(password)
  if (password == process.env.password) {
    res.status(200).send(true)
  } else {
    res.status(200).send(false)
  }
})
massive({connectionString: process.env.connectionString, ssl: {
  rejectUnauthorized: false,
},}).then(db => {
  app.set('db', db)
  app.listen(3434, () => {
    console.log(`Listening on port ${port}`)
  })
  console.log('Connected to database')
})
.catch(err => console.log("Error in connecting to SQL: ", err))
