var mongoose = require("../database");
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nome: { type: String, required: [true, 'nome obrigatório']},
    apelido:{type: String, required: true },
    email: { type: String, required: [true, 'email obrigatório'], unique: true },
    celular: { type: Number, String, required: true },
    endereco: {type: String, require: true},
    data_criacao: { type: Date, default: Date.now },
});

module.export = mongoose.model('Usuario', UsuarioSchema, 'usuario');