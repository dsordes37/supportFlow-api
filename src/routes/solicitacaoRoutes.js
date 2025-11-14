const express = require('express');
const router = express.Router();
const solicitacaoController = require('../controllers/solitacaoController');

router.get('/', solicitacaoController.getAllSolicitacoes);
router.get('/:id', solicitacaoController.getSolicitacaoById);
router.post('/', solicitacaoController.createSolicitacao);
router.put('/:id', solicitacaoController.updateSolicitacao);
router.delete('/:id', solicitacaoController.deleteSolicitacao);

module.exports=router;