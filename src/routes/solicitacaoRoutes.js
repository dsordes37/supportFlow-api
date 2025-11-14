const express = require('express');
const router = express.Router();
const solicitacaoController = require('../controllers/solitacaoController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, solicitacaoController.getAllSolicitacoes);
router.get('/:id', authMiddleware, solicitacaoController.getSolicitacaoById);
router.post('/', solicitacaoController.createSolicitacao);
router.put('/:id', authMiddleware, solicitacaoController.updateSolicitacao);
router.delete('/:id', authMiddleware, solicitacaoController.deleteSolicitacao);

module.exports=router;