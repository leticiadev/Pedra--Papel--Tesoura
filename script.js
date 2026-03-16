function jogar(jogada) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    // Lógica do jogo aqui
    const sorteio = opcoes[Math.floor(Math.random() * 3)];
    let resultado = '';
    
    if (jogada === sorteio) {
        resultado = 'Empate!';
    }
 else if ((jogada === 'pedra' && sorteio === 'tesoura') ||
           (jogada === 'papel' && sorteio === 'pedra') ||
           (jogada === 'tesoura' && sorteio === 'papel')) {
        resultado = 'Você ganhou!';
} else {
    resultado = 'Você perdeu!';
}

document.getElementById('resultado').innerText = `Você jogou: ${jogada}. O computador jogou: ${sorteio}. ${resultado}`;
}