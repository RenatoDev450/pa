// Objeto que representa uma conta bancária
const conta = {
    agencia: "1234",
    numero: "56789-0",
    senha: "4321",
    saldo: 1500,
    historico: []
};

// Função para validar acesso
function validarAcesso(agencia, numero, senha) {
    return (
        agencia === conta.agencia &&
        numero === conta.numero &&
        senha === conta.senha
    );
}

// Função para exibir saldo
function exibirSaldo() {
    console.log(`Saldo atual: R$ ${conta.saldo.toFixed(2)}`);
    conta.historico.push({ tipo: "consulta", data: new Date().toISOString(), saldo: conta.saldo });
}

// Função para calcular as cédulas
function calcularCedulas(valor) {
    const notas = [100, 50, 20, 10];
    let restante = valor;
    const cedulas = {};

    for (const nota of notas) {
        const quantidade = Math.floor(restante / nota);
        if (quantidade > 0) {
            cedulas[nota] = quantidade;
            restante -= quantidade * nota;
        }
    }
    return cedulas;
}

// Função para realizar saque
function realizarSaque(valor) {
    if (valor <= 0 || valor % 10 !== 0) {
        console.log("Valor inválido. O saque deve ser múltiplo de 10.");
        return;
    }

    if (valor > conta.saldo) {
        console.log("Saldo insuficiente.");
        return;
    }

    const cedulasEntregues = calcularCedulas(valor);
    conta.saldo -= valor;
    conta.historico.push({ tipo: "saque", data: new Date().toISOString(), valor, cedulas: cedulasEntregues });

    console.log(`Saque realizado: R$ ${valor}`);
    console.log("Cédulas entregues:");
    for (const nota of Object.keys(cedulasEntregues).sort((a, b) => b - a)) {
        console.log(`R$ ${nota}: ${cedulasEntregues[nota]}x`);
    }
    console.log(`Saldo após saque: R$ ${conta.saldo.toFixed(2)}`);
}

console.table(conta)