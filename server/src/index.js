//.env
require("dotenv").config()
const {PORT, PASSWORD} = process.env

//express
const express = require('express')
const server = express()

//cors
const cors = require("cors")

//routers
const characterRouter = require("./routes/character")
const { userRouter } = require("./routes/user")
const favoritesRouter = require("./routes/favorites")

//morgan
const morgan = require("morgan")

//middlewars
server.use(express.json())
server.use(morgan("dev"))

//cors
server.use(cors())

//routers
server.use("/character", characterRouter)
server.use("/user", userRouter)
server.use("/favorites", favoritesRouter)

server.get("/health-check/:id", (req, res) =>{
    res.send("working!")
})

server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT)
})
