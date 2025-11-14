const Solicitacao = require("../models/solicitacaoModel");

exports.getAllSolicitacoes = async (req, res)=>{
    const socilitacoes = await Solicitacao.findAll();
    res.json(socilitacoes)
}


exports.getSolicitacaoById = async (req, res)=>{
    const {id} = req.params;
    const solicitacoes = await Solicitacao.findByPk(id);

    if(!solicitacoes){
        return res.status(404).json({error: "Solicitação não encontrada"})
    }

    return res.json(solicitacoes)
}


exports.createSolicitacao = async (req, res)=>{
    try{
        const solicitacoes = await Solicitacao.create(req.body)
        return res.status(201).json({message: "Solicitação cadastrada com sucesso!", solicitacoes:solicitacoes});
    }catch(error){
        return res.status(400).json({error: error.message})
    }
    
}

exports.updateSolicitacao = async (req, res)=>{
    const {id} = req.params;
    const solicitacoes = await Solicitacao.findByPk(id);

    if(!solicitacoes)return res.status(404).json({message: "Solicitação não encontrada."});

    try{
        await solicitacoes.update(req.body);
        return res.json(solicitacoes);
    }catch(error){
        return res.json({error: error.message});
    }
}

exports.deleteSolicitacao = async (req, res)=>{
    const {id} = req.params;
    const solicitacoes = await Solicitacao.findByPk(id);

    if(!solicitacoes)return res.status(404).json({message: "Solicitação não encontrada."});

    try{
        await solicitacoes.destroy();
        return res.json({message: "Solicitação excluída com sucesso!"});
    }catch(error){
        return res.json({error: error.message});
    }
}