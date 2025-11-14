const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const jwt_secret = process.env.JWT_SECRET;

class AuthController{
    async login(req, res){
        const {matricula, senha} = req.body;
        try{
            const admin = await Admin.findOne({ where: { matricula } });

            if(!admin){
                return res.status(404).json({message:"Matrícula ou senha incorretos."})
            }

            const senhaCorreta = admin.comparePassword(senha);

            if(!senhaCorreta){
                return res.status(404).json({message:"Matrícula ou senha incorretos."})
            }

            const token = jwt.sign({id:admin.id, matricula:admin.matricula}, jwt_secret, {expiresIn: '1d'})

            return res.json({token: token, id:admin.id, message:"Login realizado com sucesso !"})


        }catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}


module.exports = new AuthController();