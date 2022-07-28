var x, y, op;

function numero(n) {
    document.getElementById("conteudo").innerHTML+= n;
    document.getElementById("item").innerHTML+= n;
}

//FUNÇÕES GERAIS
function ce() {
    document.getElementById("conteudo").innerHTML = document.getElementById("item").innerHTML;
    document.getElementById("item").innerHTML = '';
}

function c() {
    document.getElementById("conteudo").innerHTML = '';
    document.getElementById("item").innerHTML = '';
}



//FUNÇÕES ARITMÉTICAS
function alpha() {
    x = parseInt (document.getElementById("item").innerHTML);
    document.getElementById("conteudo").innerHTML+= ' + ';
    document.getElementById("item").innerHTML = '';
    op = '+';
}

function beta() {
    x = parseInt (document.getElementById("item").innerHTML);
    document.getElementById("conteudo").innerHTML+= ' - ';
    document.getElementById("item").innerHTML = '';
    op = '-';
}

function gama() {
    x = parseInt (document.getElementById("item").innerHTML);
    document.getElementById("conteudo").innerHTML+= ' * ';
    document.getElementById("item").innerHTML = '';
    op = '*';
}

function omega() {
    x = parseInt (document.getElementById("item").innerHTML);
    document.getElementById("conteudo").innerHTML+= ' / ';
    document.getElementById("item").innerHTML = '';
    op = '/';
}

//FUNÇÃO RESULTADO
function igual() {
    y = parseInt (document.getElementById("item").innerHTML);
    
    if (op == '+'){
    document.getElementById("item").innerHTML= x + y
    }

    if (op == '-'){
    document.getElementById("item").innerHTML= x - y 
    }
    
    if (op == '*'){
    document.getElementById("item").innerHTML= x * y 
    }

    if (op == '/'){
        document.getElementById("item").innerHTML= x / y 
    }
}