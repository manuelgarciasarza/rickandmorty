const express = require("express")
const {getCharById} = require("../controller/getCharById")

const characterRouter = express.Router();

characterRouter.get("/:id", getCharById)

module.exports = characterRouter;