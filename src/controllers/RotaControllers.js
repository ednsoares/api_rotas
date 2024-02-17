import Rota from "../bancos/bd.js"



async function getRotas(request, response){
    const rota = await Rota.find()
    return response.status(200).json(rota)
}

async function createRotas(request, response){
    const rota = request.body
    const newRota = await Rota.create(rota)
    return response.status(201).json(rota)
}

async function getUmaRotas(request, response){
    const id = request.params.id
    try {
        const rota = await Rota.findOne({ _id: id });
        if (!rota) {
            return response.status(404).json({ error: "Rota não encontrada" });
        }
        return response.status(200).json(rota);
    }catch (error) {
        return response.status(500).json({ error: "Error" })
    }
}

async function deleteRotas(request, response){
    const id = request.params.id
    try{
        await Rota.findByIdAndDelete({_id: id})
    }catch(error){
        return response.status(500).json({ error: "Error" })
    }
    return response.status(200).json({response: "rota deletada"})   

}

async function atualizaRotas(request, response) {
    const id = request.params.id;
    const updates = request.body;
    try {
        const rota = await Rota.findOne({ _id: id });
        if (!rota) {
            return response.status(404).json({ error: "Rota não encontrada" });
        }
        await Rota.findByIdAndUpdate(id, updates);
        const rotaAtualizada = await Rota.findOne({ _id: id });
        return response.status(200).json(rotaAtualizada);
    } catch (error) {
        return response.status(500).json({ error: "Erro interno do servidor ao atualizar a rota" });
    }
}

export { getRotas, createRotas, getUmaRotas, deleteRotas, atualizaRotas}