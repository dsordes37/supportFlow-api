const Admin = require('../models/adminModel');

exports.getAllAdmins= async (req, res)=>{
    const admins = await Admin.findAll();
    return res.json(admins);
}

exports.getAdminById = async (req, res)=>{
    const {id} = req.params;
    const admin = await Admin.findByPk(id);

    if(!admin){
        return res.status(404).json({error: "Usuário não encontrado"})
    }

    return res.json(admin)
}


exports.createAdmin = async (req, res)=>{
    try{
        const admin = await Admin.create(req.body)
        return res.status(201).json({message: "Usuário cadastrado com sucesso!", admin:admin});
    }catch(error){
        return res.status(400).json({error: error.message})
    }
    
}

exports.updateAdmin = async (req, res)=>{
    const {id} = req.params;
    const admin = await Admin.findByPk(id);

    if(!admin)return res.status(404).json({message: "Usuário não encontrado."});

    try{
        await admin.update(req.body);
        return res.json(admin);
    }catch(error){
        return res.json({error: error.message});
    }
}

exports.deleteAdmin = async (req, res)=>{
    const {id} = req.params;
    const admin = await Admin.findByPk(id);

    if(!admin)return res.status(404).json({message: "Usuário não encontrado."});

    try{
        await admin.destroy();
        return res.json({message: "Usuário excluído com sucesso!"});
    }catch(error){
        return res.json({error: error.message});
    }
}