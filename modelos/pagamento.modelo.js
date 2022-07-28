var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pagamentoSchema = new Schema({
    forma:{ type: String, enum: ["Cartão de credito", "Cartão de debito", "boleto",], default: "Cartão de credito"},
    email: {type: String, require: true},
    idade: { type: Number, default: 0},
    senha: { type: password, require: true}
});

module.export = mongoose.model("Pagamento", pagamentoSchema, "pagamento")