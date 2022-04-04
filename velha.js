let jogador, vencedor = null;
const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function escolherQuadrado(id) {
    // Se já existir um vencedor, não execulta o resto do código
    if (vencedor !== null) {
        return;
    }

    let quadrado = document.getElementById(id);
    // Se for diferente, para aqui. Não substitui o valor colocado de x ou o
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function checaVencedor(){
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);

    checaEmpate()

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}
function checaEmpate(){
    const quadrados = document.querySelectorAll('.quadrado')
    let array = [];
    quadrados.forEach(quadrado => {
        array.push(quadrado.innerHTML)
    })
    const resultado = array.every(item => item !== "-")
    
    if (resultado === true){
        deuEmpate()
    }

}

function deuEmpate(){
    const quadrados = document.querySelectorAll('.quadrado')
    quadrados.forEach(item=>item.style.background ="red")
}
function mudarVencedor(quadrado) {
    // Nesse momento o vencedor para de ser nulo
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    let listaDeQuadrados = [quadrado1, quadrado2, quadrado3]
    listaDeQuadrados.forEach(q => q.style.background = '#0f0')
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    let eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }
    // Se for true, continua a excucao lá na funcao checa vencedor

    return eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);
        quadrado.style.background = 'rgb(80, 157, 230)';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}

const botao = document.querySelector('.dentro')
const body = document.querySelector('body')
const label = document.querySelectorAll('label')
const h1 = document.querySelector('h1')
const button = document.querySelector('button')
const quadrado = document.querySelectorAll('.quadrado')

botao.addEventListener('click', ()=>{
    botao.classList.toggle('passar')
    body.classList.toggle('black')
    label.forEach(item=>item.classList.toggle('white'))
    h1.classList.toggle('white')
    button.classList.toggle('branco')
    quadrado.forEach(item=> item.classList.toggle('branco'))
})