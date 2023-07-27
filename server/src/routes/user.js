const { login } = require("../controller/login")

const userRouter = require("express").Router()

userRouter.get("/login", login)

module.exports = { userRouter }