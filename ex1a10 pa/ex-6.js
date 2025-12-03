const livros = [
    { titulo: "Livro R", autor: "Autor K", ano: 2008 },
    { titulo: "Livro Y", autor: "Autor G", ano: 2015 },
    { titulo: "Livro E", autor: "Autor M", ano: 2009 }
  ];
  
  function livrosApos2010(lista) {
    return lista.filter(livro => livro.ano < 2010);
  }
  
 let listaFiltrada = livrosApos2010(livros)

 console.log(listaFiltrada);
 