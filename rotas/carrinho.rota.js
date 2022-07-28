const express = require('express')
var router = express.Router()

const controlador = require('../controladores/carrinho.controlador')
const itemcontrole = new controlador

router.post('/inserir', itemcontrole.carrinho_inserir)

router.get('/listar', itemcontrole.carrinho_listar)

router.get('/buscar/:id', itemcontrole.carrinho_buscar)

router.put('/atualizar/:id', itemcontrole.carrinho_atualizar)

router.delete('/deletar/:id', itemcontrole.carrinho_deletar)

module.exports = router 