var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carrinhoSchema = new Schema({
    finalizar: { type: String, require: true},
    itens_add: { type: Number, default: 0},
    adicionar: { type: Number, default: 0}
});

module.export = mongoose.model("Carrinho", carrinhoSchema, "carrinho")