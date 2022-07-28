const express = require('express')
var router = express.Router()

const controlador = require('../controladores/usuario.controlador')
const itemcontrole = new controlador

router.post('/inserir', itemcontrole.usuario_inserir)

router.get('/listar', itemcontrole.usuario_listar)

router.get('/buscar/:id', itemcontrole.usuario_buscar)

router.put('/atualizar/:id', itemcontrole.usuario_atualizar)

router.delete('/remover:id', itemcontrole.usuario_remover)

module.exports = router 