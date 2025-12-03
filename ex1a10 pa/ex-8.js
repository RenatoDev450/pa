// Crie um objeto representando uma conta com agência, número da conta, senha, saldo e histórico de operações. Crie um sistema com as funções:

// validar acesso (recebe agência, conta e senha)
// exibir saldo
// realizar saque (somente se houver saldo)
// No saque, exiba a quantidade de cédulas entregues usando as notas: 100, 50, 20 e 10, utilizando o menor número possível de cédulas.
const pessoas = [
    { id: 1, nome: "Ana", idade: 22 },
    { id: 2, nome: "Bruno", idade: 30 },
    { id: 3, nome: "Carla", idade: 25 },
    { id: 4, nome: "Diego", idade: 28 },
    { id: 5, nome: "Emily", idade: 19 },
    { id: 6, nome: "Felipe", idade: 35 },
    { id: 7, nome: "Gabriela", idade: 27 },
    { id: 8, nome: "Henrique", idade: 32 },
    { id: 9, nome: "Isabela", idade: 21 },
    { id: 10, nome: "João", idade: 29 }
  ];
  
  function filtrarMaioresDe18(lista) {
    return lista.filter(pessoa => pessoa.idade > 18);
  }
  
  const maiores = filtrarMaioresDe18(pessoas);
  console.table(maiores);
    
