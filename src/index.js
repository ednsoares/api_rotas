import express from "express"

import conectaDB from "./database/db.js"
import routes from "./routes.js"

const app = express()

app.use(express.json())
app.use(routes)

conectaDB().then(() => {
    app.listen(3000,() => console.log("Servidor e Banco de dados Operando"))
}).catch((error) => console.log("error"))