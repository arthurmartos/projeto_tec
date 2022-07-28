const express = require('express')
var router = express.Router()

const controlador = require('../controladores/vendedor.controlador')
const itemcontrole = new controlador

router.post('/listar', itemcontrole.vendedor_inserir)

router.get('/listar', itemcontrole.vendedor_listar)

router.get('/inserir', itemcontrole.vendedor_buscar)

router.put('/listar', itemcontrole.vendedor_atualizar)

router.post('/buscar/:id', itemcontrole.vendedor_remover)

module.exports = router 
