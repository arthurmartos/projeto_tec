var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var vendedorSchema = new Schema({
    nome_completo:{ type: String, require: true},
    email: { type: String, require: true},
    idade: { type: Number, default: 0},
    endereco: {type: String, require: true},
    cpf: {type: String, require: true},
    telefone: {type: String, require: true},
    senha: { type: password, require: true}
});

module.export = mongoose.model("Vendedor ", vendedorSchema, "vendedor")