const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());
app.use(express.static("html"))
app.use(express.static("css"))
app.use(express.static("img"))

app.use("/api/produto", require("./rotas/produto.rota"))
app.use("/api/usuario", require("./rotas/usuario.rota"))
app.use("/api/carrinho", require("./rotas/carrinho.rota"))
app.use("/api/pagamento", require("./rotas/pagamento.rota"))
app.use("/api/vendedor", require("./rotas/vendedor.rota"))

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);


Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

Kitten.find({ name: /^fluff/ }, callback);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

let server = app.listen(8080, function(){
    let port = server.address().port;
    console.log("Servidor iniciado em http://localhost%s");

  });