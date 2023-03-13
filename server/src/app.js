//import das bibliotecas que serão utiliadas
const express = require("express")
const cors = require("cors")
const routes = require("./routes/routes")
require("dotenv").config()



//criando uma nova instancia express
const app = express()


//tudo que a aplciação irá utilziar
app.use(express.json())
app.use(cors())
app.use(routes)

module.exports = app