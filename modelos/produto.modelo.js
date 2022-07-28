const { text } = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    tamanho: { type: Number, default: 0},

});

module.export = mongoose.model("Produto", produtoSchema, "produto")