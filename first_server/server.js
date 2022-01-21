import express from "express"
// const express = require("express");
import sendData from "./services/services.js"
// console.log(express)
const app = express();
const PORT = 3000
// app.listen(PORT)


//HOME ROUTE
app.get("/", (req, res) => {
  // console.log("Got a request!!!")
  res.send(`
  <h1>${name}</h1>
  `)
})

//DATA ROUTE
app.get("/someData", sendData)

app.listen(PORT, () =>
console.log(`listening to the sweet sound of port: ${PORT}`))