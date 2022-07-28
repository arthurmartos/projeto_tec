//FUNÇÕES DA PÁGINA 3
function A() {
    document.getElementById('alpha').src='TELA_BLACKOUT.png'
    document.getElementById('beta').src='';
    document.getElementById('gama').src='';
    document.getElementById('omega').src='';
}

function B() {
    document.getElementById('alpha').src='';
    document.getElementById('beta').src='TELA_REGRAS.png';
    document.getElementById('gama').src='';
    document.getElementById('omega').src='';
}

function C() {
    document.getElementById('alpha').src='';
    document.getElementById('beta').src='';
    document.getElementById('gama').src='TELA_WON.png';
    document.getElementById('omega').src='';
}

function D() {
    document.getElementById('alpha').src='';
    document.getElementById('beta').src='';
    document.getElementById('gama').src='';
    document.getElementById('omega').src='TELA_GAME_OVER.png';
}

