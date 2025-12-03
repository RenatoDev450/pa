const produtos = [
    { nome: "Produto 1", preco: 60 },
    { nome: "Produto 2", preco: 35 },
    { nome: "Produto 3", preco: 120 }
  ];
  
  function filtrarAcimaDe50(lista) {
    return lista.filter(item => item.preco < 50);
  }
  
console.log(filtrarAcimaDe50(produtos));


 
