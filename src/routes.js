import { Router } from "express"

import {getRotas, createRotas, getUmaRotas, deleteRotas, atualizaRotas} from "./controllers/RotaControllers.js"

const routes = Router()

routes.get("/rotas", getRotas)
routes.post("/rotas", createRotas)
routes.put("/rotas/:id", atualizaRotas)
routes.delete("/rotas/:id", deleteRotas)
routes.get("/rotas/:id", getUmaRotas)
export default routes
