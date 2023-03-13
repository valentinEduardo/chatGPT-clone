//Será a rota até o controller
//ou seja vai apontar o endereço apra o controller
const express = require("express")
const promptController = require("../controller/prompt-controller")

const routes = require = express.Router()

routes.post("/api/prompt", promptController.sendText)
module.exports = routes

//http://localhost:5001/api/prompt