var jogadorNome
var jogadorPontos = 0
var jogadorEscolha = 0

var computadorPontos = 0
var computadorEscolha = 0

//Exibe mensagem na tela
function mensagem(texto){
    document.getElementById('mensagem').innerHTML = texto;
}

//Define o nome do jogador na tela
function definirNomeJogador(nome){
    document.getElementById('jogadorNome').innerHTML = nome;
}

//Sorteia entre dois números.
function sortear (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Calcula e retorna quem ganhou
// 0 - Empate
// 1 - Jogador
// 2 - Computador
function calcularEscolha(jogador, computador){
    if(jogador == 1 && computador == 1){
        return 0;
    }
    else if(jogador == 1 && computador == 2){
        return 2;
    }
    else if(jogador == 1 && computador == 3){
        return 1;
    }

    else if(jogador == 2 && computador == 1){
        return 1;
    }
    else if(jogador == 2 && computador == 2 ){
        return 0;
    }
    else if(jogador == 2 && computador == 3 ){
        return 2;
    }

    else if(jogador == 3 && computador == 1 ){
        return 2;
    }

    else if(jogador == 3 && computador == 2 ){
        return 1;
    }

    else if(jogador == 3 && computador == 3 ){
        return 0;
    }

}

//Soma os pontos do Jogador
function somarPontosJogador(){
    jogadorPontos ++;
    document.getElementById('jogadorPontos').innerHTML = jogadorPontos;
}

//Soma os pontos do Computador
function somarPontosComputador(){
    computadorPontos ++;
    document.getElementById('computadorPontos').innerHTML = computadorPontos;
}

function selecionar(tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

function deselecionar(tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

/* escolhas
1 = pedra
2 = papel
3 = tesoura */
function jogar(escolha){
    
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    computadorEscolha = sortear(1,3);
    selecionar('computador', computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
    
    if (ganhador == 0){
        mensagem('Empate');
    }
    else if(ganhador == 1){
        mensagem(`Ponto para o jogador ${jogadorNome}`)
        somarPontosJogador()
    }
    else if(ganhador == 2){
        mensagem(`Ponto para o Computador`);
        somarPontosComputador()
    }

    setTimeout(function() {
        deselecionar('jogador', jogadorEscolha)
        deselecionar('computador', computadorEscolha)

        mensagem(`${jogadorNome} escolha uma opção novamente`)
    },3500)
     
}


document.getElementById('jogador-escolha-1').onclick = function(){
    jogar(1);
};

document.getElementById('jogador-escolha-2').onclick = function(){
    jogar(2);
};

document.getElementById('jogador-escolha-3').onclick = function(){
    jogar(3);
};

jogadorNome = prompt('Qual é o seu nome');

mensagem(`Bem-vindo ${jogadorNome} está preparado?
 Escolha uma das opções acima...`)
 
definirNomeJogador(jogadorNome)