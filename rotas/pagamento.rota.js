const express = require('express')
var router = express.Router()

const controlador = require('../controladores/pagamento.controlador')
const itemcontrole = new controlador

router.post('/inserir', itemcontrole.pagamento_inserir)

router.get('/listar', itemcontrole.pagamento_listar)

router.get('/buscar/:id', itemcontrole.pagamento_buscar)

router.put('/atualizar/:id', itemcontrole.pagamento_atualizar)

router.delete('/deletar/:id', itemcontrole.pagamento_deletar)

module.exports = router 