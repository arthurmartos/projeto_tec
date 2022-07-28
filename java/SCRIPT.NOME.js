var nome, sobrenome;

function first() {
var  nome = document.getElementById("nome0").value;
var  sobrenome = document.getElementById("nome1").value;

if (nome==sobrenome) {
window.alert("Inválido");
var nome = document.getElementById("nome0").value;
var sobrenome = document.getElementById("nome1").value;

} else 
document.getElementById("resultado1").innerHTML = nome + " " + sobrenome;
document.getElementById("resultado2").innerHTML = " ";
document.getElementById("resultado1").style.color = "red ";
document.getElementById("resultado1").style.fontSize = "10";
document.getElementById("resultado1").style.fontWeight = "bold";
}



function second() {
var  nome = document.getElementById("nome0").value;
var  sobrenome = document.getElementById("nome1").value;

if (nome==sobrenome) {
window.alert("Inválido");
var nome = document.getElementById("nome0").value;
var sobrenome = document.getElementById("nome1").value;

} else 
document.getElementById("resultado2").innerHTML = sobrenome + ", " + nome;
document.getElementById("resultado1").innerHTML = " ";
document.getElementById("resultado2").style.color = "green";
document.getElementById("resultado2").style.fontSize = "14";
document.getElementById("resultado2").style.fontStyle = "italic";
}

function goast(){
window.alert("Avatar Selecionado");
}

function imgao(){
document.getElementById("imagem").style.height = "150px";
document.getElementById("imagem").style.width = "150px";
}

function img(){
document.getElementById("imagem").style.height = "100px";
document.getElementById("imagem").style.width = "100px";
}

function azul(){
document.getElementById("resultado1").style.color = "blue";
document.getElementById("resultado2").style.color = "blue";
}

function colorido(){
document.getElementById("resultado1").style.color = "red";
document.getElementById("resultado2").style.color = "green";
}