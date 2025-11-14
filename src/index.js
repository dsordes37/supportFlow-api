const express = require("express");
const app = express();

const adminRoutes = require('./routes/adminRoutes')
const solicitacaoRotes = require("./routes/solicitacaoRoutes");

app.use(express.json());
app.use("/admins", adminRoutes);
app.use("/solicitacoes", solicitacaoRotes);



app.get('/', (req, res)=>{
    res.json({status:"ok", message:"testando"});
})

module.exports=app