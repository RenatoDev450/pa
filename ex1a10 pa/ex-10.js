// Array de jogadores
const jogadores = [
    { nome: "Jogador1", pontos: 150 },
    { nome: "Jogador2", pontos: 200 },
    { nome: "Jogador3", pontos: 120 }
];

// Função para ordenar os jogadores do maior para o menor ponto
function ordenarRanking(jogadoresArray) {
    return jogadoresArray.slice().sort((a, b) => b.pontos - a.pontos);
}
 
console.table(jogadores)