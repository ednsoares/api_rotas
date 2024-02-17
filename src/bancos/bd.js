import mongoose from "mongoose";

const rotaSchema = new mongoose.Schema({
    nome_city1:{
        type: String,
        require: true
    }
    ,nome_city2:{
        type: String,
        require: true
    },
    distancia:{
        type: Number,
        require: true
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Rota", rotaSchema)