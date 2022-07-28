const express = require('express')
var router = express.Router()

const controlador = require('../controladores/produto.controlador')
const itemcontrole = new controlador

router.post('/inserir', itemcontrole.produto_inserir)

router.get('/listar', itemcontrole.produto_listar)

router.get('/buscar/:id', itemcontrole.produto_buscar)

router.put('/atualizar/:id', itemcontrole.produto_atualizar)

router.delete('/remover:id', itemcontrole.produto_remover)


module.exports = router