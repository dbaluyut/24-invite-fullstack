import axios from "axios"

const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

function getRandomPersonfromApi() {
  axios.get(`https://randomuser.me/api/?nat=gb`).then((resp) => resp.data)
}

app.get("/", (req, res) => {
  res.json(getRandomPersonfromApi())
})

app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})
