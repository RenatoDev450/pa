// 7. Carrinho de Compras
// Crie um array com objetos de itens (nome, quantidade, preço). Crie uma função que calcule o valor total do carrinho.

const itens = [
    { id: 1, nome: "Caderno", quantidade: 10, preco: 12.50 },
    { id: 2, nome: "Lápis", quantidade: 50, preco: 1.20 },
    { id: 3, nome: "Caneta", quantidade: 30, preco: 2.80 },
    { id: 4, nome: "Borracha", quantidade: 20, preco: 1.00 },
    { id: 5, nome: "Apontador", quantidade: 15, preco: 3.50 },
    { id: 6, nome: "Regua", quantidade: 12, preco: 4.00 },
    { id: 7, nome: "Mochila", quantidade: 5, preco: 85.00 },
    { id: 8, nome: "Estojo", quantidade: 8, preco: 18.90 },
    { id: 9, nome: "Marca-texto", quantidade: 14, preco: 5.80 },
    { id: 10, nome: "Cola", quantidade: 10, preco: 6.50 },
    { id: 11, nome: "Tesoura", quantidade: 7, preco: 9.90 },
    { id: 12, nome: "Livro", quantidade: 6, preco: 45.00 },
    { id: 13, nome: "Papel Sulfite", quantidade: 20, preco: 17.50 },
    { id: 14, nome: "Clipes", quantidade: 100, preco: 0.10 },
    { id: 15, nome: "Grampeador", quantidade: 4, preco: 22.00 },
    { id: 16, nome: "Grampos", quantidade: 200, preco: 0.05 },
    { id: 17, nome: "Pincel", quantidade: 10, preco: 7.20 },
    { id: 18, nome: "Tinta Guache", quantidade: 8, preco: 11.80 },
    { id: 19, nome: "Lápis de Cor", quantidade: 12, preco: 14.90 },
    { id: 20, nome: "Agenda", quantidade: 5, preco: 25.00 }
  ];
  
  
  let carrinho= [];

  function adicionarAoCarinho(id,listaDeProdutos=[],carrinhoParaAdcionar){
    let produtoFiltrado = listaDeProdutos.filter(produto => produto.id === id);

    carrinhoParaAdcionar.push(produtoFiltrado[0])
    
  }

  adicionarAoCarinho(7,itens,carrinho)
  adicionarAoCarinho(3,itens,carrinho)
  adicionarAoCarinho(20,itens,carrinho)

  console.table(carrinho);
  
  let soma={total:"R$"+carrinho.reduce((acumulador,corrente)=>acumulador+corrente.preco,0).toFixed(2)}
  console.table(soma)