const express = require("express")
const axios = require("axios")
const util = require("util")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let users = [{ name: "ned", last: "stark", phone: "xxxxxxx", email: "d@b.com" }]
let randomUser = []

let going = []

let notGoing = []

// function getRandomPersonfromApi() {
//   axios
//     .get(`https://randomuser.me/api/?inc=name,phone,email`)
//     .then((resp) => res.json(resp.data.results[0]))
// }

app.get("/api", (req, res) => {
  axios
    .get(`https://randomuser.me/api/?inc=name,phone,email,picture`)
    .then((resp) => {
      // console.log(resp.data.results[0])
      const user = resp.data.results[0]
      //   res.json(resp.data.results[0])
      res.json({
        first: user.name.first,
        last: user.name.last,
        email: user.email,
        phone: user.phone,
        img_thumb: user.picture.large,
      })
    })
})

app.post("/api/going", (req, res) => {
  going.push(req.body)
  res.json(going)
})

app.get("/api/going", (req, res) => {
  res.json(going)
})

app.post("/api/notGoing", (req, res) => {
  notGoing.push(req.body)
  res.json(notGoing)
})

app.get("/api/notGoing", (req, res) => {
  res.json(notGoing)
})
// app.get("/", (req, res) => {
//   res.json(getRandomPersonfromApi())
// })

app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})
