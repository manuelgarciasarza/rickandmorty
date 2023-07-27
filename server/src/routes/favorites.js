const favoritesRouter = require("express").Router()
const {postFav, deleteFav, getFav} = require("../controller/handleFavorites")

favoritesRouter.get("/", getFav)
favoritesRouter.post("/", postFav)
favoritesRouter.delete("/:id", deleteFav)

module.exports = favoritesRouter;